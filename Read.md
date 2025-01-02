React özelinde hazırlanan projeyi ve detaylarını aşağıda bulabilirsiniz. Bir havalimanı 
API’si ile basitçe uçuş bilgilerinin listelenebilmesi ve kullanıcı uçuş bilgilerinin basitçe 
kaydedilmesini sağlayacak bir web uygulaması bekliyoruz. API kullanımı ile ilgili 
açıklamaları da eposta içeriğinde bulabilirsiniz. Projede en önemli beklentimiz temiz, 
şık ve sade bir arayüz geliştirilmesinin yapılmasıdır. Yapılacak ekranlar ekte verilen 
görsellerdeki tasarımların birebir aynısı olmalıdır. Anasayfa ve uçuşlarım ekranlarının 
kodlanması yeterlidir.
 Belirlenen süre içerisinde bu görevin tamamlanmasını ve sonunda Github üzerinden 
bizimle paylaşılmasını bekliyoruz. Repository’nin public olmasını ve 24 Eylül 2024 
saat 20:00’a kadar teslimini bekliyoruz. 
Proje özellikleri
 • Anasayfada aşağıda API kullanımı kısmına belirtilen API kullanılarak uçuşlar 
listelenmelidir. 
• Tarih ve hareket yönüne göre uçuşlar filtrelenebilmelidir. 
• Kullanıcı rezervasyon yapabilmelidir. Basitçe uçuş seçimi yapılıp Nodejs ile 
yazacağınız API ile MongoDB database’e kaydedilmesi yeterlidir. Uçuşunuz 
kaydedildi gibi bir uyarı ile kullanıcı bilgilendirilebilir ve uçuşlarım sayfasına 
yönlendirilerek backend’e kaydedilmiş uçuş detayı basitçe listelenebilir. 
Geçmiş tarihli uçuşlar için ise bu tarih için rezervasyon yapamazsınız şeklinde 
kontroller sağlanabilir.
 • Uçuşlarım sayfasında kullanıcının MongoDB database’ine kaydedilen 
uçuşların çekilmesi için bir API yazılması ve sayfada listelenmesi 
gerekmektedir
 Arayüz özellikleri
 • Modern, sade ve şık bir tasarım beklemekteyiz.
 • Sayfalar arası uyumluluk beklenmektedir.
 • API üzerinden sunulan bilgiler arasından uçuş saati, numarası, kodu gibi 
temel bilgilerin gösteriliyor olması beklenmektedir. Bunun dışındaki bilgilerin 
gösterimi geliştiriciye bırakılmıştır.
 Kodlama beklentileri
 • Geliştirme dili olarak React tercih edilmelidir.
 • Backend dili olarak Nodejs kullanılmalı ve Database olarak mongodb 
kullanılmalıdır. Nodejs bilginiz yoksa bilgileri lokale kaydedip gösterebilirsiniz. 
NodeJS kullanan arkadaşlar bir adım önde olacaktır.
 • React standartları ile uyumlu, açık ve anlaşılır bir mimari beklenmektedir.
 • Kodun derlenebilir olması gerekmektedir.
 • Kod saklama ve paylaşamı için Github üzerinden açılacak bir repository 
kullanılmalıdır.
 • Temiz bir kod yapısı ile proje kodlanmalı ve mutlaka açıklama satırları 
eklenmelidir.
 • Uygulama ile ilgili açıklamalar için dokümanın [README.md] projede 
sağlanması gerekmektedir. Varsa minimum gereksinimler, derleme öncesi 
sağlanması gereken ön koşullar ile geliştirme ve uygulama kullanım 
detaylarının bu dokümanda yeterli düzeyde sağlanmasını bekliyoruz.
 • Projenin çalıştığı halinin ekran görüntüleri [README.md] dokümanı içerisinde 
yer almalıdır.
API kullanımı
 Schiphol havalimanına ait API kullanılarak uçuşların listelenmesi gerekmektedir. 
Bunun için öncelikle "
 https://developer.schiphol.nl" adresinden ücretsiz bir hesap 
oluşturulmalıdır. Ardından Flight V4 API için elde edilen Application Id ve Application 
Key istekler için kullanılabilir. Yalnızca uçuşları getiren API kullanılacaktır. Harici ek 
işlemler yapılmasına gerek yoktur.
 Flight API kullanımına dair dokümana aşağıdaki linkten ulaşılabilir;
 https://developer.schiphol.nl/apis/flight-api/overview?version=latest
 Bunların dışında yapılacak uçuş listesinde ek filtreleme seçenekleri, API tarafından 
sağlanan bilgiler kapsamında sunulacak ek bilgiler, arayüzlerde yapılacak görsel 
iyileştirmeler ve animasyonlar bonus olarak değerlendirilecektir.
