import { ContentItem } from "../types";

interface DocsContentRendererProps {
  items: ContentItem[];
}

export const DocsContentRenderer: React.FC<DocsContentRendererProps> = ({
  items,
}) => {
  return (
    <>
      {items.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <p key={index} className="mb-4">
                {item.text}
              </p>
            );
          case "heading":
            return (
              <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                {item.text}
              </h3>
            );
          case "list":
            return (
              <ul key={index} className="list-disc pl-5 space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
                ))}
              </ul>
            );
          case "orderedList":
            return (
              <ol key={index} className="list-decimal pl-5 space-y-2">
                {item.items.map((listItem, i) => {
                  if (typeof listItem === "string") {
                    return (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: listItem }}
                      />
                    );
                  } else {
                    return (
                      <li key={i}>
                        <div
                          dangerouslySetInnerHTML={{ __html: listItem.text }}
                        />
                        {listItem.description && (
                          <p className="mt-1">{listItem.description}</p>
                        )}
                        {listItem.code && (
                          <div className="bg-muted p-2 mt-1 rounded-md">
                            <code className="whitespace-pre-wrap">
                              {listItem.code}
                            </code>
                          </div>
                        )}
                      </li>
                    );
                  }
                })}
              </ol>
            );
          case "code":
            return (
              <div
                key={index}
                className="bg-muted p-4 rounded-md overflow-x-auto"
              >
                <pre className="whitespace-pre-wrap">{item.text}</pre>
              </div>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      {item.headers.map((header, i) => (
                        <th
                          key={i}
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {item.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4 text-sm">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
