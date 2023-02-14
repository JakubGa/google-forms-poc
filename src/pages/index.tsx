import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useMemo } from "react";
import FormContext from "@/form-context/FormContext";

export default function Home() {
  const { query, replace } = useRouter();
  const { answers, setAnswer } = useContext(FormContext);

  const currentPage = useMemo(() => {
    if (!query.page || Array.isArray(query.page)) {
      return 1;
    }

    return parseInt(query.page);
  }, [query.page]);

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    replace(`/?page=${currentPage + 1}`);
  };

  useEffect(() => {
    if (currentPage !== 1 && !Object.keys(answers).length) {
      replace("/");
    }
  }, [answers, currentPage, replace]);
  return (
    <main className={styles.main}>
      <small>{`Current answers: ${JSON.stringify(answers)}`}</small>
      <p>{`Current page: ${currentPage}`}</p>
      <form onSubmit={handleSubmit}>
        {["first", "second", "third"].map((val) => (
          <div key={`question_${currentPage}_${val}`}>
            <label htmlFor={val}>{val}</label>
            <input
              value={answers[`question_${currentPage}_${val}`] ?? ""}
              onChange={(e) => {
                if (e?.target?.value) {
                  setAnswer(`question_${currentPage}_${val}`, e.target.value);
                }
              }}
              id={val}
              required
            />
          </div>
        ))}
        <button type="submit">Next Page</button>
      </form>
    </main>
  );
}
