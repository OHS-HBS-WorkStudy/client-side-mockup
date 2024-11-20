import DOMPurify from "dompurify";
export default function CustomButton2({ func, data1, data2, name, desc }) {

  const sanitizedTitle =  DOMPurify.sanitize(name);
  const sanitizedDesc = DOMPurify.sanitize(desc);

    return (
      <div
        className="grid-item"
        onClick={(e) => func(e)}
        data-data1={data1}
        data-data2={data2}
      >
        <div
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
                />
                <div
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
                />
        </div>

    );
  }