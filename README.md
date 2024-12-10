# StreamVibe

StreamVibe, en sevdiğiniz filmleri ve şovları istediğiniz zaman, istediğiniz yerde izlemek için en iyi yayın deneyimidir. StreamVibe ile en son gişe rekorları kıran filmler, klasik filmler, popüler TV şovları ve daha fazlası dahil olmak üzere çok çeşitli içeriklerin keyfini çıkarabilirsiniz. Ayrıca kendi izleme listelerinizi oluşturabilir, böylece izlemek istediğiniz içeriği kolayca bulabilirsiniz.

## Özellikler

- En son gişe rekorları kıran filmler ve klasik içerikler
- Kullanıcı dostu arayüz - responsive ve hızlı performans

## Teknolojiler

Bu proje aşağıdaki teknolojilerle geliştirilmiştir:

### Frontend
- **Next.js** 15.0.4
- **React** 19.0.0
- **Tailwind CSS** 3.4.1
- **Embla Carousel** (React ile entegre edilmiş)
- **Lucide Icons**

### Backend
- Henüz backend entegrasyonu yok. Gelecekte eklenebilir.

### Diğer Araçlar ve Kütüphaneler
- **Radix UI** (Accordion ve Slot)
- **Redux Toolkit** (Durum yönetimi için)
- **Zod** (Şema doğrulama için)
- **Tailwind Merge** (Tailwind sınıf birleştirme için)
- **clsx** (Koşullu sınıf yönetimi için)
- **TailwindCSS Typography** ve **TailwindCSS Animate**

## Nasıl Çalıştırılır

Proje, geliştirme veya prodüksiyon ortamında çalıştırılabilir.

### Geliştirme Ortamında Çalıştırma

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/ismailkskn98/stream-vibe
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

4. [http://localhost:3000](http://localhost:3000) adresinden projeyi görüntüleyin.

### Prodüksiyon Ortamında Çalıştırma

1. Prodüksiyon için derleyin:
   ```bash
   npm run build
   ```

2. Sunucuyu başlatın:
   ```bash
   npm start
   ```

## Proje Yapısı

```plaintext
.
├── public/        # Statik dosyalar (resimler, ikonlar vs.)
├── src/           # Ana kaynak dosyaları
│   ├── components/ # React bileşenleri
│   ├── app/      # Next.js sayfa dosyaları
│   ├── styles/     # CSS veya Tailwind dosyaları
│   └── lib/      # Redux ve diğer libraries
│   └── types/      # types
│   └── services/      # API servisleri
├── package.json   # Proje bağımlılıkları ve script'ler
└── README.md      # Proje açıklaması
```