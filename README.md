# Bu sayt shunchaki portfolio uchun yaratilgan haqiqiy ma'lumot kiritilmagan

# Tezkor News 24 ⚡📰

**Tezkor yangiliklar — hozircha sinov bosqichida!** 

## Loyiha haqida

**Tezkor News 24** — bu React + Vite yordamida yaratilgan oddiy yangiliklar agregatori loyihasi.  
Maqsad: **NewsData.io** API orqali real vaqtda yangiliklarni olish.

## Texnologiya stacki

- **Frontend**: React 19 + Vite (rolldown-vite bilan)
- **Styling**: Tailwind CSS 4 + Inter font
- **API**: Axios + NewsData.io[](https://newsdata.io)
- **Routing**: React Router DOM v7
- **Meta**: @dr.pogodin/react-helmet
- **Til & Tip**: TypeScript 5.9+
- **Linting**: ESLint + React Hooks/Refresh

## O'rnatish

1. Repozitoriyani klon qiling

   ```bash
   git clone https://github.com/asilbek-ddiv/tezkornews24.git
   cd tezkornews24
   ```
2. Bog'liqlarni o'rnatish
   ```bash
   npm install
   ```
3. **.env** fayl yarating loyihani index.html yoniga va uzingizni api kalitingizni joylashtirasiz
   ```bash
    VITE_NEWSDATA_API_KEY=SIZNING_API_KEYINGIZ!
   ```
   Kalitni https://newsdata.io dan oling (bepul plan bor, lekin cheklovli).
   
5. Loyihani ishga tushirish
   ```bash
   npm run dev
   ```
   
