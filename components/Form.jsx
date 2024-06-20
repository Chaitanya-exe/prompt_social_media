import Link from "next/link"

const Form = ({type, post, setPost, handleSubmit, submitting}) => {

  return (
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{type} Post</span>
        </h1>
        <p className="desc text-left max-w-md">{type} prompts to share all over the world to maximize the use of AI tools available in the current market.</p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI prompt
            </span>

            <textarea 
              placeholder="write your prompt here..."
              onChange={(e)=>{setPost({...post,prompt:e.target.value})}}
              value={post.prompt}
              required
              className="form_textarea"
            />
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag <span className="font-normal">(#webDevelopment, #contentGeneration, #art)</span>
            </span>

            <input 
              placeholder="#someHashTag"
              onChange={(e)=>{setPost({...post,tag:e.target.value})}}
              value={post.tag}
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link 
              href="/"
              className="text-gray-500 text-sm"
            >Cancel</Link>

            <button type="submit" disabled={submitting} className="text-sm bg-primary-orange text-white rounded-full px-5 py-1.5">
              {submitting?`${type}...`:type}
            </button>
          </div>

        </form>
      </section>
    )
}

export default Form