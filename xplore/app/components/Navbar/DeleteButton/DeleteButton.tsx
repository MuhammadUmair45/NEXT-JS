'use client';

export default function DeleteButton() {
    const deleteButton = () => {
        alert("Button Deleted");
    };
    return (
        <button onClick={deleteButton}>Delete</button>
    );
}