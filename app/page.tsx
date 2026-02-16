export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-8 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-bold tracking-tight text-card-foreground">
          Planet Quiz
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Test your astronomy knowledge
        </p>

        <form>
          <fieldset>
            <legend className="mb-6 text-lg font-semibold text-card-foreground">
              Which is the farthest planet from the Sun?
            </legend>

            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                <input
                  type="radio"
                  name="answer"
                  value="neptune"
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm font-medium">Neptune</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                <input
                  type="radio"
                  name="answer"
                  value="uranus"
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm font-medium">Uranus</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                <input
                  type="radio"
                  name="answer"
                  value="saturn"
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm font-medium">Saturn</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                <input
                  type="radio"
                  name="answer"
                  value="pluto"
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm font-medium">Pluto</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                <input
                  type="radio"
                  name="answer"
                  value="jupiter"
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm font-medium">Jupiter</span>
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </main>
  )
}
