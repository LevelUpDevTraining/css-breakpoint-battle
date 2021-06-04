export default function Page() {
  return (
    <div>
      <div className="vanilla-container">
        <div className="bg-blue-300 h-screen">
          <div className="container-padding">
            <div className="bg-green-200 flex-container">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return <div className="box">{i}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
