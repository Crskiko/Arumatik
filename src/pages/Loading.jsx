/**
 * A loading page that appear when data is ine the process of fetching.
 *
 * @returns {*} - The rendered loading page.
 */
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-blue rounded-full animate-bounce-seq delay-0"></div>
        <div className="w-3 h-3 bg-blue rounded-full animate-bounce-seq delay-200"></div>
        <div className="w-3 h-3 bg-blue rounded-full animate-bounce-seq delay-400"></div>
      </div>
    </div>
  )
}

export default Loading;
