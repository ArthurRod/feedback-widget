import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("shouldn't be able to submit a feedback without type", () => {
    expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image",
      })
    ).rejects.toThrow();
  });

  it("shouldn't be able to submit a feedback without comment", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image",
      })
    ).rejects.toThrow();
  });

  it("shouldn't be able to submit a screenshot with an invalid format", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});
