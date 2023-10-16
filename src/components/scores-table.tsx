export const ScoresTable = ({ scores }: { scores: { name: string; score: string; }[] }) => {
  return (
    <table className="w-full text-center mt-8">
      <thead className="text-xl">
        <th>#</th>
        <th>Name</th>
        <th>Score</th>
      </thead>
      <tbody>
        {scores.map(({ name, score }, id) => (
          <tr key={id} className="border-b-2 border-dashed h-12">
            <td>{id + 1}</td>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}