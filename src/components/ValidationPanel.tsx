import type { ValidationResult } from "@/types/activity";

type ValidationPanelProps = {
  result: ValidationResult | null;
  successMessage: string;
  errorMessages: string[];
};

export function ValidationPanel({ result, successMessage, errorMessages }: ValidationPanelProps) {
  const hasRun = result !== null;
  const success = result?.success === true;
  const messages = hasRun ? result.messages : errorMessages;

  return (
    <section className={`validationPanel ${success ? "isSuccess" : ""} ${hasRun && !success ? "isError" : ""}`}>
      <strong>{success ? "Validacion completa" : hasRun ? "Revisar entrega" : "Criterios"}</strong>
      {success ? <p>{successMessage}</p> : null}
      {!success ? (
        <ul>
          {messages.map((message, index) => (
            <li key={`${message}-${index}`}>{message}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
