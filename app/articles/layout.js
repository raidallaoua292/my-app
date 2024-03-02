
export const metadata = {
    title: "Articles",
    description: "Articles page",
  };

export default function ({ children }) {
    return (
        <div>
            <h1>Layout</h1>
            {children}
        </div>
    );
}