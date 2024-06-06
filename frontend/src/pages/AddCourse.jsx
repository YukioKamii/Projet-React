import { useAtom } from 'jotai';
import { coursesAtom } from '../atoms';
import Card from '../components/CoursesIndex/Card';

function CourseIndex() {
  // Utiliser l'atome coursesAtom pour obtenir l'état global des cours
  const [courses] = useAtom(coursesAtom);

  return (
    <>
      <h1>Liste des cours</h1>
      {courses.map((course) => (
        <Card key={course.id} title={course.title} content={course.content} />
      ))}
    </>
  );
}

export default CourseIndex;
