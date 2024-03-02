export default function ShowArticles(props) {
    console.log(props);
    return (
        <div>
            <h1>Show Articles</h1>
            <p>{props.params.titel}</p>
        </div>
    );
}