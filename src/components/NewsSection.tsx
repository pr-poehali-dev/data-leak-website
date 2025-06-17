import React from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const newsData = [
    {
      title: "Утечка данных Сбербанка: 60 млн клиентов под угрозой",
      description:
        "Персональные данные клиентов крупнейшего банка России попали в открытый доступ из-за уязвимости в системе безопасности. Утекли ФИО, номера телефонов, данные карт.",
      date: "15 июня 2025",
      severity: "high" as const,
      affectedUsers: "60 млн",
      company: "Сбербанк",
    },
    {
      title: "МТС: база абонентов в даркнете",
      description:
        "Хакеры выставили на продажу базу данных 15 миллионов абонентов МТС. В утечку попали номера телефонов, адреса, паспортные данные и история звонков.",
      date: "12 июня 2025",
      severity: "high" as const,
      affectedUsers: "15 млн",
      company: "МТС",
    },
    {
      title: "Wildberries: утечка данных покупателей",
      description:
        "Из-за ошибки в API маркетплейса в открытый доступ попали данные 8 млн покупателей: адреса доставки, история покупок, телефоны.",
      date: "10 июня 2025",
      severity: "medium" as const,
      affectedUsers: "8 млн",
      company: "Wildberries",
    },
    {
      title: "Госуслуги: брешь в системе авторизации",
      description:
        "Обнаружена уязвимость в портале госуслуг, позволяющая получить доступ к личным данным граждан. Угрозе подверглись СНИЛС, паспортные данные.",
      date: "8 июня 2025",
      severity: "high" as const,
      affectedUsers: "120 млн",
      company: "Госуслуги",
    },
    {
      title: "Яндекс.Такси: данные водителей и пассажиров",
      description:
        "В результате атаки злоумышленники получили доступ к базе с информацией о поездках, маршрутах и контактных данных пользователей сервиса.",
      date: "5 июня 2025",
      severity: "medium" as const,
      affectedUsers: "12 млн",
      company: "Яндекс",
    },
    {
      title: "Тинькофф Банк: утечка через мобильное приложение",
      description:
        "Уязвимость в мобильном приложении банка позволила получить доступ к данным клиентов: балансы счетов, история транзакций, личная информация.",
      date: "2 июня 2025",
      severity: "high" as const,
      affectedUsers: "25 млн",
      company: "Тинькофф",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-onyx to-gray-900" id="news">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver mb-6 font-montserrat">
            Последние утечки данных
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-open-sans">
            Мониторим и анализируем случаи утечек персональных данных российских
            граждан. Информируем о реальных угрозах и халатности компаний.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 font-open-sans">
            Загрузить больше новостей
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
