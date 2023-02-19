import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import { readHadith } from "../store/QuranSlice";

const ReadHadith = () => {
  const { hadithId } = useParams();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.quran);

  useEffect(() => {
    dispatch(readHadith(hadithId));
  }, [dispatch, hadithId]);

  return (
    <LoadingComponent error={error} loading={loading}>
      <Container>
        <div className="text-center mt-5 lh-lg">
          <h1 className="text-center mb-4 lh-lg">{data.hadeeth}</h1>
          <div className="p-4">
            <h2 className="p-2 border-info border-bottom ">التفسير</h2>
            <h3 className="my-3 lh-lg">{data.explanation}</h3>
            <div className="p-2 border-info border-bottom ">
              {data?.words_meanings?.length > 0 ? (
                <>
                  <h3 className="my-3">معاني الكلمات</h3>
                  <div className="pt-3  p-2 border-info border-top flex-column text-end d-flex ">
                    {data.words_meanings?.map((el, index) => (
                      <h5 className="mb-4" key={index}>
                        {el.word} : {el.meaning}
                      </h5>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            <div className="pt-3  p-2 border-info border-bottom justify-content-evenly d-flex ">
              <p>{data?.attribution}</p>
              <p>{data?.grade}</p>
            </div>
          </div>
        </div>
      </Container>
    </LoadingComponent>
  );
};

export default ReadHadith;
