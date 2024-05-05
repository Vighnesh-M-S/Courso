import { collection, getDocs } from 'firebase/firestore';

const fetchCourses = async () => {
  const coursesCollectionRef = collection(firestore, 'courses');

  try {
    const querySnapshot = await getDocs(coursesCollectionRef);
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push(doc.data());
    });
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};
