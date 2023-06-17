import React ,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerxiseOptions ,fetchData,youtubeOptions} from '../utils/fetchData'

import Detail from '../component/Details'
import ExerciseVideos from '../component/ExerciseVideos'
import SimilarExercises from '../component/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} =useParams();

useEffect(() => {
const fetchExercisesData =async() => {
const exerciseDbUrl ='https://exercisedb.p.rapidapi.com';
const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

const exerciseDetailData =await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerxiseOptions)
console.log({exerciseDetailData})
setExerciseDetail(exerciseDetailData);

const exerciseVideosData =await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData}`,youtubeOptions)
console.log(exerciseVideosData)
setExerciseVideos(exerciseVideosData.contents)

const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerxiseOptions);
setTargetMuscleExercises(targetMuscleExercisesData);

const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerxiseOptions);
setEquipmentExercises(equimentExercisesData);

}
fetchExercisesData();
}, [id]);

  return (
    <Box>
     <Detail exerciseDetail={exerciseDetail}/>
     <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
     <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail