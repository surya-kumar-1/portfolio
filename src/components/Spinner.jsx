import './Spinner.css';

export default function Spinner({ done = false }) {
    return (
        <div className="loader" style={{
            visibility: done ? "hidden" : "visible",
            position: "absolute",
            zIndex: 10,
        }}></div>
    );
}