import BeforeAfterSlider from "./components/BeforeAfterSlider";
import InteractiveDemo from "./components/InteractiveDemo";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <header className="w-full border-b border-zinc-200/60">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-zinc-900" />
            <span className="font-semibold">Complete Object Removal via Object-Effect Attention</span>
          </div>
          <nav className="flex items-center gap-3 text-sm">
            <a className="px-3 py-1 rounded hover:bg-zinc-100" href="#">arXiv</a>
            <a className="px-3 py-1 rounded hover:bg-zinc-100" href="#">Code</a>
            <a className="px-3 py-1 rounded hover:bg-zinc-100" href="#">Demo</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="text-center">
          {/* Project name with reflection */}
          <div className="relative inline-block select-none">
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-red-600">Object Clear</div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-full text-5xl sm:text-6xl font-extrabold tracking-tight text-red-600/40 opacity-40 translate-y-1 scale-y-[-1] blur-[1px]"
            >
              Object Clear
            </div>
          </div>

          {/* Paper title */}
          <h1 className="mt-8 text-4xl sm:text-5xl font-semibold leading-tight text-zinc-900">
            Complete Object Removal via Object-Effect Attention
          </h1>

          {/* Authors */}
          <p className="mt-8 text-xl text-zinc-700 flex flex-wrap gap-x-2 gap-y-1 items-center justify-center">
            <a className="text-blue-600 hover:underline" href="#">Jixin Zhao</a>,
            <a className="text-blue-600 hover:underline" href="#">Shangchen Zhou</a>
            <sup className="text-zinc-500 ml-0.5">†</sup>,
            <a className="text-blue-600 hover:underline" href="#">Zhouxia Wang</a>,
            <a className="text-blue-600 hover:underline" href="#">Peiqing Yang</a>,
            <a className="text-blue-600 hover:underline" href="#">Chen Change Loy</a>
          </p>

          {/* Affiliation */}
          <p className="mt-4 text-xl text-zinc-600">
            S-Lab, Nanyang Technological University
          </p>
          <p className="mt-2 text-lg text-zinc-500">
            <sup>†</sup>Corresponding author
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-900 text-white text-xl shadow hover:opacity-90"
              href="#"
            >
              <span aria-hidden>⚔️</span>
              arXiv
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-900 text-white text-xl shadow hover:opacity-90"
              href="#"
            >
              <span aria-hidden>💻</span>
              Code
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-900 text-white text-xl shadow hover:opacity-90"
              href="#"
            >
              <span aria-hidden>😺</span>
              Demo
            </a>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example sliders using placeholder assets; replace with real images when available */}
          <BeforeAfterSlider beforeSrc="/next.svg" afterSrc="/vercel.svg" label="Shadow" />
          <BeforeAfterSlider beforeSrc="/next.svg" afterSrc="/vercel.svg" label="Shadow" />
          <BeforeAfterSlider beforeSrc="/next.svg" afterSrc="/vercel.svg" label="Shadow" />
          <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/globe.svg" label="Reflection" />
          <BeforeAfterSlider beforeSrc="/globe.svg" afterSrc="/window.svg" label="Reflection" />
          <BeforeAfterSlider beforeSrc="/vercel.svg" afterSrc="/next.svg" label="Reflection" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Abstract</h2>
          <p className="mt-3 text-zinc-700">
            Object removal requires eliminating not only the target object but also its effects, such as shadows and reflections. However, diffusion-based inpainting methods often produce artifacts, hallucinate content, alter background, and struggle to remove object effects accurately. To address this challenge, we introduce a new dataset for OBject-Effect Removal, named OBER, which provides paired images with and without object effects, along with precise masks for both objects and their associated visual artifacts. The dataset comprises high-quality captured and simulated data, covering diverse object categories and complex multi-object scenes. Building on OBER, we propose a novel framework, ObjectClear, which incorporates an object-effect attention mechanism to guide the model toward the foreground removal regions by learning attention masks, effectively decoupling foreground removal from background reconstruction. Furthermore, the predicted attention map enables an attention-guided fusion strategy during inference, greatly preserving background details. Extensive experiments demonstrate that ObjectClear significantly outperforms existing methods, achieving superior object-effect removal quality and background fidelity, especially in complex scenarios.
          </p>
        </section>

        <InteractiveDemo
          className="mt-12"
          items={[
            {
              id: "scribbles",
              title: "ObjectClear with User Strokes",
              thumbSrc: "/window.svg",
              videoSrc: "/videos/scribbles.mp4",
            },
            {
              id: "clicks",
              title: "ObjectClear with User Clicks",
              thumbSrc: "/globe.svg",
              videoSrc: "/videos/clicks.mp4",
            },
          ]}
        />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">OBER Dataset</h2>
          <p className="mt-3 text-zinc-700">
            The OBER dataset combines both camera-captured and simulated data, featuring diverse foreground objects and background scenes. It provides rich annotations, including object masks, object-effect masks, transparent RGBA object layers, and complex multi-object scenarios for training and evaluation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">ObjectClear Pipeline</h2>
          <p className="mt-3 text-zinc-700">
            Given an input image and a target object mask, ObjectClear employs an Object-Effect Attention mechanism to guide the model toward foreground removal regions by learning attention masks. The predicted mask further enables an Attention-Guided Fusion strategy during inference, which substantially preserves background details.
          </p>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            This website template is borrowed from Nerfies and ProPainter. Thank you!
          </p>
        </section>

        <section className="mt-12 text-center text-sm text-zinc-500">visitors</section>
      </main>
    </div>
  );
}
