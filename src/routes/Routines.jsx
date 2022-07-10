const Routines = ({routines}) => {
  return (
    <>
      <h1>Routines</h1>
      {routines.map((routine) => (
        <div key={routine.id}>
          <ul>
            <li>
              <h2>{routine.name}</h2>
            </li>
            <ul>
              <li>
                <h4>Goal: {routine.goal}</h4>
              </li>
              <li>
                <h4>Created By: {routine.creatorName}</h4>
              </li>
            </ul>
            </ul>
          {routine.activities && routine.activities.map((routineActivity) => (
            <ul key={routineActivity.id}>
              <h4>-------------------</h4>
              <li>
                <h4>Activity: {routineActivity.name}</h4>
              </li>
              <ul>
              <li>
                <h4>Description: {routineActivity.description}</h4>
              </li>
              <li>
                <h4>Duration: {routineActivity.duration}</h4>
              </li>
              <li>
                <h4>Count: {routineActivity.count}</h4>
              </li>
              </ul>
            </ul>
          ))}

          <h1>--------------------------</h1>
        </div>
      ))}
    </>
  );
};

export default Routines;