# Next.js Blog Uygulaması

Bu proje, Next.js 13 kullanılarak geliştirilmiş modern bir blog uygulamasıdır. Markdown formatında yazılan blog yazılarını dinamik olarak görüntüler.

## 🚀 Özellikler

- ⚡ Next.js 13 App Router
- 📝 Markdown blog yazıları
- 🎨 Tailwind CSS ile modern tasarım
- 🔍 Blog içeriklerinde arama
- 📱 Responsive tasarım
- 🌙 Koyu/Açık tema desteği

## 🛠️ Kullanılan Teknolojiler

- [Next.js 13](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Gray Matter](https://github.com/jonschlinkert/gray-matter)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Kurulum

```bash
# Repoyu klonla
git clone https://github.com/HalilKul/markdown-blog-app.git

# Proje dizinine git
cd markdown-blog-app

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 📝 Kullanım

1. `/posts` klasörüne markdown formatında blog yazılarınızı ekleyin
2. Her yazı için gerekli meta verileri ekleyin:
   ```markdown
   ---
   title: "Blog Başlığı"
   date: "2024-03-20"
   description: "Blog açıklaması"
   ---
   ```
3. Yazılarınız otomatik olarak ana sayfada listelenecektir

## 🌐 Canlı Demo

[Live Demo](https://markdown-blog-app.vercel.app)

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.