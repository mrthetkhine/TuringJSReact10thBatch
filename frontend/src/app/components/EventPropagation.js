'use client';
export default function EventPropagation() {
    const playHandler = (event)=>{
        alert('Playing!');
        event.stopPropagation();
    }

    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <button onClick={playHandler }>
                Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
                Upload Image
            </button>
        </div>
    );
}
