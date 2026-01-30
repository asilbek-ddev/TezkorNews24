import { useEffect, useState } from "react";
import axios from "axios";

interface NewsData {
  status: string;
  results: any[];
}

const NewsComponent = () => {
  const [data, setData] = useState<NewsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const countries = "us,ru,tr,de";
  const cacheKey = `latestNews_${countries.replace(/,/g, "_")}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const cached = localStorage.getItem(cacheKey);
        const cacheTimeStr = localStorage.getItem(`${cacheKey}_time`);

        const now = Date.now();
        const cacheValid =
          cached && cacheTimeStr && now - Number(cacheTimeStr) < 1 * 60 * 1000;

        if (cacheValid) {
          setData(JSON.parse(cached!));
          setLoading(false);
          return;
        }

        const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;

        if (!apiKey) {
          throw new Error("API kaliti topilmadi (VITE_NEWSDATA_API_KEY)");
        }

        const response = await axios.get("https://newsdata.io/api/1/latest", {
          params: {
            apikey: apiKey,
            country: countries,
            language: "uz",
          },
        });

        const freshData = response.data;

        setData(freshData);

        localStorage.setItem(cacheKey, JSON.stringify(freshData));
        localStorage.setItem(`${cacheKey}_time`, now.toString());
      } catch (err: any) {
        console.error("Yangiliklarni yuklashda xato:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Yangiliklarni yuklab bo'lmadi",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [countries]);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Yangiliklar yuklanmoqda...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-medium">
        Xatolik: {error}
      </div>
    );
  }

  if (!data?.results?.length) {
    return (
      <div className="text-center py-10 text-gray-600">
        Hozircha yangiliklar mavjud emas
      </div>
    );
  }

  return (
    <div className="containers px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        So'nggi yangiliklar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {data.results.map((item, index) => (
          <div
            key={item.article_id || index}
            className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            <img
              src={item.image_url || "/placeholder-news.jpg"}
              alt={item.title || "Yangilik rasmi"}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-news.jpg";
              }}
            />
            <div className="p-4 flex flex-col grow">
              <h2>
                Manba:
                <b>
                  <a
                    className="hover:underline "
                    href={item.source_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source_name}
                  </a>
                </b>
              </h2>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3 grow">
                {item.description || "Tavsif mavjud emas..."}
              </p>
              <div className="mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-block"
                >
                  Batafsil o'qish →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
