import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import LoadingComponent from "../../components/LoadingComponent";

import { getAudioUrl } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuran, getDataReciter } from "../../store/QuranSlice";

const RecitersSurah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const audioRef = useRef();
  const [selectedSurah, setSelectedSurah] = useState(null);
  const { error, loading, reciters, data } = useSelector(
    (state) => state.quran
  );

  const surahList = reciters[0]?.moshaf[0].surah_list.split(",");
  const server = reciters[0]?.moshaf[0].server;

  const surahData = data?.filter((surah) =>
    surahList?.includes(surah.number.toString())
  );

  const playAudioHandler = (surahNumber) => {
    setSelectedSurah(getAudioUrl(server, surahNumber));
    audioRef.current.autoplay = true;
  };

  useEffect(() => {
    dispatch(getDataReciter(id));
    dispatch(getAllQuran());
  }, [id, dispatch]);

  return (
    <LoadingComponent error={error} loading={loading}>
      <Container>
        <div className="text-center p-3 mb-5">
          <h1 className="mb-3">
            الإستماع إلي القرآن الكريم بصوت <br /> الشيخ {reciters[0]?.name}
          </h1>
          <p>{reciters[0]?.moshaf[0].name}</p>

          <br />
          <audio controls ref={audioRef} src={selectedSurah}>
            <a href={selectedSurah}>Download audio</a>
          </audio>
        </div>

        <>
          {surahData.map((surahName) => (
            <div
              key={surahName.number}
              className="p-4 ayahBox transition text-white border border-info rounded mb-4 p-3 d-flex justify-content-between"
            >
              <button
                className="border-info bg-info rounded-3 text-black fw-bold p-2 play-icon"
                onClick={() => {
                  playAudioHandler(surahName.number);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
              </button>
              <h4>{surahName.name}</h4>
              <span className="border-info bg-info rounded-3 text-black fw-bold  p-2">
                {reciters[0]?.moshaf[0].name}
              </span>
            </div>
          ))}
        </>
      </Container>
    </LoadingComponent>
  );
};

export default RecitersSurah;
