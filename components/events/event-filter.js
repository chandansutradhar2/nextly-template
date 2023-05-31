export default function EventFilter() {
  const skillCategories = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Mobile Development" },
    { id: 3, name: "UI/UX Design" },
    { id: 4, name: "Angular" },
    { id: 5, name: "Machine Learning" },
    { id: 6, name: "Artificial Intelligence" },
    { id: 7, name: "Cyber Security" },
    { id: 8, name: "React" },
    { id: 9, name: "DevOps" },
    { id: 10, name: "Digital Marketing" },
    { id: 11, name: "Business" },
    { id: 12, name: "Other" },
  ];

  const dateFilter = [
    { id: 1, name: "Today" },
    { id: 2, name: "Tomorrow" },
    { id: 3, name: "This Week" },
    { id: 4, name: "This Month" },
    { id: 5, name: "This Year" },
    { id: 6, name: "All Time" },
  ];

  return (
    <div className="max-w-fit w-60">
      <div className="h-screen p-4 bg-slate-300 w-screen text-black">
        <div className="m-8 flex justify-between">
          <div>
            <h1 className="font-mono text-2xl bold">Filters</h1>
          </div>
          <div>
            <button className="rounded text-blue-600 px-3 py-2 font-semibold bg-gray-100 border-blue-500">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
