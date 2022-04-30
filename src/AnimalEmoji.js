export default function AnimalEmoji({ animal }) {
  return (
    <div className="animals">
      {animal === 'cheetah' && '🐆'}

      {animal === 'tiger' && '🐅'}

      {animal === 'panther' && '🐈‍⬛'}
    </div>
  );
}
