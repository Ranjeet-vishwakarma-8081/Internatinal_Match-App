import propTypes from "prop-types";
const MatchType = ({ dates, selectedDate, setSelectedDate }) => {
  const handleClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex justify-center items-center">
      {dates.map((date) => (
        <button
          key={date}
          onClick={() => handleClick(date)}
          className={`mx-2 px-4 py-2 rounded-sm border-2 border-gray-800 ${
            selectedDate === date ? "bg-gray-800 " : "bg-black"
          }`}
        >
          {date}
        </button>
      ))}
    </div>
  );
};

MatchType.propTypes = {
  dates: propTypes.array,
  selectedDate: propTypes.string,
  setSelectedDate: propTypes.func,
};

export default MatchType;
