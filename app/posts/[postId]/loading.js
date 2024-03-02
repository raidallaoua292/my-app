export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-900 h-64 w-64"></div>
            <h1>Loading...</h1>
        </div>
    );
}