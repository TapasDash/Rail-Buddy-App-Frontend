import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TrainInfoCard from "./TrainInfoCard";

const TrainBetweenStationsDetails = () => {
  // const {
  //   boardingInfo,
  //   destinationInfo,
  //   trainInfo: { dt, name, trainNo },
  //   seatInfo: { coach, berth, noOfSeats },
  // } = pnrData;
  // const {
  //   trainBetweenStationsData: {
  //     boardingInfo,
  //     destinationInfo,
  //     trainInfo: { dt, name, trainNo },
  //   },
  // } = useSelector((state) => state.pnrStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { trainBetweenStationsData, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.trainBetweenStations);
  console.log({ trainBetweenStationsData });

  useEffect(() => {
    if (isError) console.error(message);

    // if (!isSuccess) {
    //   navigate("/");
    // }
    // return () => {
    //   dispatch(reset());
    // };
  }, [isError, message, dispatch, navigate]); //isError, message, dispatch, navigate
  // console.log({ trainBetweenStationsData });
  if (isLoading) return <h1>Loading....</h1>;

  const {
    stationName,
    stationCode,
    destinationStationName,
    destinationStation,
    trainNo,
    trainName,
    arrivalTime,
    departureTime,
  } = trainBetweenStationsData || {};

  const fromStation = {
    code: stationCode,
    name: stationName,
    time: arrivalTime,
  };

  const toStation = {
    code: destinationStation,
    name: destinationStationName,
    time: departureTime,
  };
  // r
  // return (
  //   <section className="fromStation">
  //     <h2>{boardingInfo.stationCode}</h2>
  //     <p>{boardingInfo.stationName}</p>
  //     <h5>{boardingInfo.arrivalTime}</h5>
  //   </section>
  // );
  return (
    <TrainInfoCard
      fromStation={fromStation}
      toStation={toStation}
      trainNo={trainNo}
      trainName={trainName}
    />
  );
};
export default TrainBetweenStationsDetails;