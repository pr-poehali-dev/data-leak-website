import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  severity: "high" | "medium" | "low" | "minor";
  affectedUsers: string;
  company: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  severity,
  affectedUsers,
  company,
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "from-red-600/20 to-red-800/20 border-red-500/30";
      case "medium":
        return "from-orange-600/20 to-orange-800/20 border-orange-500/30";
      case "low":
        return "from-yellow-600/20 to-yellow-800/20 border-yellow-500/30";
      case "minor":
        return "from-green-600/20 to-green-800/20 border-green-500/30";
      default:
        return "from-gray-600/20 to-gray-800/20 border-gray-500/30";
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "high":
        return "Критическая";
      case "medium":
        return "Средняя";
      case "low":
        return "Низкая";
      case "minor":
        return "Незначительная";
      default:
        return "Неизвестная";
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${getSeverityColor(severity)} backdrop-blur-md border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            severity === "high"
              ? "bg-red-500/20 text-red-300"
              : severity === "medium"
                ? "bg-orange-500/20 text-orange-300"
                : severity === "low"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : severity === "minor"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-gray-500/20 text-gray-300"
          }`}
        >
          {getSeverityText(severity)}
        </span>
        <span className="text-gray-400 text-sm font-open-sans">{date}</span>
      </div>

      <h3 className="text-xl font-bold text-silver mb-3 font-montserrat leading-tight">
        {title}
      </h3>

      <p className="text-gray-300 mb-4 font-open-sans text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-400 font-open-sans">
          <span className="font-semibold text-silver">{company}</span>
        </div>
        <div className="text-gray-400 font-open-sans">
          Пострадало:{" "}
          <span className="font-semibold text-red-300">{affectedUsers}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
