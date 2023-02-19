import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import { getSeletedLists } from "../store/QuranSlice";

const SelectedList = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.quran);

  useEffect(() => {
    dispatch(getSeletedLists(listId));
  }, [dispatch, listId]);

  return (
    <LoadingComponent error={error} loading={loading}>
      <Container className="mt-5">
        {Array.isArray(data)
          ? data.map((hadith) => (
              <Link
                to={`/hadithList/${listId}/${hadith.id}`}
                key={hadith.id}
                className=" ayahBox transition text-white border border-info rounded mb-4 p-3 d-flex justify-content-between"
              >
                <h4>{hadith.title}</h4>
              </Link>
            ))
          : null}
      </Container>
    </LoadingComponent>
  );
};

export default SelectedList;
