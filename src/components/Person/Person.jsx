export const Person = ({ person }) => {
  const { name, age = undefined, sex, isMarried, partnerName } = person;

  const ageText =
    age !== undefined ? <p className="Person__age">I am {age}</p> : null;

  let partnerText;

  if (isMarried) {
    if (sex === 'm') {
      partnerText = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      partnerText = `${partnerName} is my husband`;
    }
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageText}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
