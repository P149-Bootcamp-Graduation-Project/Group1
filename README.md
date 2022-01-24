<div align="center">
<h3 align="center">Inavitas Bootcamp Graduation Project</h3>
  <img src="./images/team.jpg" width="300" height="300">

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#team-members">TEAM</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

OKUL Enerji Takip Sistemi
Tanıtım
Okul enerji takip sistemi (monitoring).
Okullarda bulunan sınıfların, ısı dereceleri, hava kaliteleri ve sınıfın
ortalama elektrik tüketimini takip edebileceğimiz bir microservice serisi
yapılacak.
3 farklı sensor simule edilip saniyelik olarak data üretecek. Üretilen bu
data REST API (producer) tarafından okunup kuyruğa eklenecek.
Kuyruğa eklenen verilerin işlenmesini yine REST API(consumer) tarafı
işleyip veritabanına kaydedecek. Hata oluşması durumunda Mongodb’ye error
logları başka bir API ile işlenecek.
Son olarak tüm dataları okumak ve error logları takip için bir Reader API
geliştirilip sistemin herşeyi o api aracılığı ile analiz ya da monitorize
edilebilecek.

- Sistemde 3 farklı veritabanı kullanılacak.
- Tüm Servisler NodeJS ile yazılacak
- Geliştirme ortamı olarak Docker teknolojisi kullanılacak
- Tüm öğrencilere Nodejs Microservice kemik yapısı ile docker dosyaları
  oluşturuldu ve dağıtıldı
- Redis ile de kısa süreli cache yapısı kullanılacak
- Proje öğrencilere giriş seviyesinde anlatıldı
- Tüm öğrenciler 6 kişilik gruplarda küme halinde çalışacaklar.
- Her grubun başında bir yönlendirici ve her yönlendiriciye yardımcı
  olacak bir inavitas çalışanı olacak. Resim 2 de çalışma grupları
  listelenmiştir.
- Resim 1 de ise projenin ana hatları ve yapısı şema halinde
gösterilmiştir.
<div align="center"><img src="./images/school-energy-system.png" width="500" height="500">Resim 1</div>

## Mikro Servisler

- Sensor reader (Producer)
- Kafka data reader (Consumer)
- Error Log collector
- Data reader class by class

## Sensörler & Araçlar

- Isı sensörü
- Hava Kalite Ölçüm
- Elektrik Tüketim Sayacı

## Built With

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://vuejs.org/)
- [MongoDB](https://angular.io/)
- [Kafka.js](https://svelte.dev/)

<div id="top"></div>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/P149-Bootcamp-Graduation-Project/Group1.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- ROADMAP -->

## Roadmap

```
GROUP1
├── core-reader-api
│   ├── app
│   │   ├── adapters
│   │   │   └── database
│   │   ├── controllers
│   │   │   ├── air-logs
│   │   │   ├── classes
│   │   │   ├── electric-logs
│   │   │   ├── schools
│   │   │   ├── sensors
│   │   │   ├── temperature-logs
│   │   │   └── users
│   │   │       └── auth
│   │   ├── libs
│   │   │   └── swagger
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── services
│   └── docs
├── error-logger-api
│   ├── app
│   │   ├── adapters
│   │   │   └── database
│   │   ├── controllers
│   │   ├── libs
│   │   │   └── swagger
│   │   ├── models
│   │   ├── routes
│   │   └── service
│   └── docs
├── kafka-consumer-api
│   ├── app
│   │   └── adapters
│   │       ├── database
│   │       └── queue
│   └── docs
└── kafka-producer-api
    ├── app
    │   ├── adapters
    │   │   └── queue
    │   ├── controllers
    │   │   └── sensors
    │   └── routes
    └── docs
```

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- ACKNOWLEDGMENTS -->

## Team Members

- [Ömer Alper ODAMAN](https://github.com/alperodaman)
- [Burak ALTUNTAŞ](https://github.com/baltuntas3)
- [Emirhan YILMAZER]()
- [Beyzanur AKIN](https://github.com/beyzanurakin)

<p align="right">(<a href="#top">back to top</a>)</p>
