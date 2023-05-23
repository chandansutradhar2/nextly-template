export default function PopularCourse() {
    return (
        <div className="container">
        <div className="h-screen p-4 bg-slate-300 w-screen text-black">
            <div className="m-8 flex justify-between">
            <div>
                <h1 className="font-mono text-4xl bold">Popular Courses for you</h1>
                <p className="py-3">
                Get the best course to kick start your learning
                </p>
            </div>
            <div>
                <button className="rounded text-blue-600 px-3 py-2 font-semibold bg-gray-100 border-blue-500">
                See All Course
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}