export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const getAudioUrl = (server, surahNumber) => {
  const paddedNumber =
    surahNumber > 0 && surahNumber < 10
      ? `00${surahNumber}`
      : surahNumber > 9 && surahNumber < 100
      ? `0${surahNumber}`
      : surahNumber;
  return `${server}${paddedNumber}.mp3`;
};
