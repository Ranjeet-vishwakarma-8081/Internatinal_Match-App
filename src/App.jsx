import { useState, useEffect } from "react";
import MatchType from "./components/MatchType";
import ProfilePhoto from "./components/ProfilePhoto";
import HamburgerMenu from "./components/HamburgerMenu";
import MatchList from "./components/MatchList";
import BottomNavigationBar from "./components/BottomNavigationBar";

const dates = ["Upcoming", "🟢 Live", "Completed"];

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [showBottomNav, setShowBottomNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowBottomNav(false);
      } else {
        setShowBottomNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col  max-w-lg mx-auto bg-black  text-white">
          <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-inherit border-b-4 ">
            <ProfilePhoto />
            <HamburgerMenu
              searchResult={searchResult}
              setSearchResult={setSearchResult}
            />
          </header>
          <main className="mt-6 mb-20 min-h-screen">
            <MatchType
              dates={dates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <MatchList
              selectedDate={selectedDate}
              filterOptions={searchResult}
            />
          </main>
          {showBottomNav && (
            <footer className="sticky bottom-0 left-0 right-0 z-50  bg-black mt-6">
              <BottomNavigationBar />
            </footer>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
