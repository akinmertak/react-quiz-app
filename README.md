# 🧠 React Quiz Uygulaması

Bu proje, React kullanılarak geliştirilmiş modern ve interaktif bir bilgi yarışması (Quiz) uygulamasıdır. Kullanıcılar farklı zorluk seviyelerinde soruları çözerek genel kültürlerini test edebilirler.

## 🚀 Özellikler

- **Zorluk Seviyesi Seçimi:** Kolay, Orta ve Zor seçenekleri ile bilgi seviyenize uygun sorular.
- **Zamanlayıcı:** Her soru için 30 saniyelik süre limiti.
- **Anlık Puanlama:** Doğru cevaplarda puan artışı (Her doğru cevap +100 puan).
- **Dinamik Soru Havuzu:** [OpenTDB API](https://opentdb.com/) kullanılarak her seferinde farklı sorular.
- **Sonuç Ekranı:** Quiz bitiminde toplam skoru gösteren modal penceresi.
- **Responsive Tasarım:** Mobil ve masaüstü uyumlu arayüz.

## 🛠️ Kullanılan Teknolojiler

- **[React](https://reactjs.org/):** Kullanıcı arayüzü oluşturmak için.
- **[React Router](https://reactrouter.com/):** Sayfa yönlendirmeleri için.
- **[Open Trivia Database API](https://opentdb.com/):** Soru verilerini çekmek için.
- **CSS:** Stil ve tasarım için.

## 📂 Proje Yapısı

```
src/
├── api/
│   └── api.js           # API isteklerinin atıldığı ve verinin işlendiği dosya
├── asset/
│   └── quiz.jpeg        # Uygulama görselleri
├── component/
│   ├── dropdown/        # Zorluk seviyesi seçim bileşeni
│   └── questionCard/    # Soru kartı ve zamanlayıcı bileşeni
├── modal/
│   └── Modal.jsx        # Sonuç ekranı (Pop-up)
├── pages/
│   ├── introduce/       # Giriş ekranı
│   └── quiz/            # Ana quiz ekranı ve oyun mantığı
├── App.js               # Ana uygulama ve yönlendirme yapılandırması
└── index.js             # Uygulamanın DOM'a render edildiği giriş noktası
```

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/akinmertak/react-quiz-app.git
    cd react-quiz-app
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı başlatın:**
    ```bash
    npm start
    ```
    Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

## 📝 Kod Detayları

- **`api.js`**: OpenTDB'den verileri çeker ve cevap şıklarını (doğru ve yanlış cevapları) karıştırarak sunar.
- **`Introduce.jsx`**: Kullanıcının zorluk seviyesi seçmesini sağlar ve oyunu başlatır.
- **`Quiz.jsx`**: Oyunun ana motorudur. Soruların yüklenmesini, skor takibini ve oyunun bitiş durumunu yönetir.
- **`QuestionCard.jsx`**: Soruyu ekrana basar, 30 saniyelik geri sayımı yönetir ve kullanıcının cevabını kontrol eder.

## 👤 Yazar

**Akın Mert AK**
- GitHub: [@akinmertak](https://github.com/akinmertak)

---
