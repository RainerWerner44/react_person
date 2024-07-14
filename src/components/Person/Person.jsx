export const Person = ({
  person: { name, age = null, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age !== null && <p className="Person__age">I am {age}</p>}
    <p className="Person__partner">
      {isMarried === true && sex === 'm' ? <p>{partnerName} is my wife</p> : ''}
      {isMarried === true && sex === 'f' ? (
        <p>{partnerName} is my husband</p>
      ) : (
        ''
      )}
      {isMarried === false ? <p>I am not married</p> : ''}
    </p>
  </section>
);
