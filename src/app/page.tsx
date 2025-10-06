import BeforeAfterSlider from "./components/BeforeAfterSlider";
import InteractiveDemo from "./components/InteractiveDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 text-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 px-4">
            PANDORA<br />
            Pixel-wise Attention Dissolution<br />
            and Latent Guidance<br />
            for Zero-Shot Object Removal
          </h1>

          {/* Authors */}
          <div className="text-lg md:text-xl mb-8">
            Anonymous authors
          </div>

          {/* Authors - Commented for anonymous submission
          <div className="text-lg md:text-xl mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>
              Dinh-Khoi Vo<sup>1,2,3</sup>
            </span>
            <span>
              Van-Loc Nguyen<sup>1,2,3</sup>
            </span>
            <span>
              Minh-Triet Tran<sup>1,2,3</sup>
            </span>
            <span>
              Trung-Nghia Le<sup>1,2,3</sup>
            </span>
          </div>

          {/* Affiliations - Commented for anonymous submission
          <div className="text-base md:text-lg mb-4 flex flex-col items-center justify-center gap-y-2">
            <span>
              <sup>1</sup>Faculty of Information Technology, University of Science, VNU-HCM, Ho Chi Minh City, Vietnam
            </span>
            <span>
              <sup>2</sup>Software Engineering Laboratory, University of Science, VNU-HCM, Ho Chi Minh City, Vietnam
            </span>
            <span>
              <sup>3</sup>Vietnam National University, Ho Chi Minh City, Vietnam
            </span>
          </div>

          {/* Conference - Commented for anonymous submission
          <div className="text-xl md:text-2xl font-semibold mb-8">
            ECCV 2024
          </div>
          */}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors"
            >
              PDF
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors"
            >
              ARXIV
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors"
            >
              New: ObjectMate
            </a>
          </div>

          {/* Hero Image Demo */}
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl text-gray-700 font-light mb-6">Original Image</h2>
            <div className="aspect-video bg-white rounded overflow-hidden">
              <img
                src="/globe.svg"
                alt="Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-12 px-4 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <h2 className="text-3xl font-bold uppercase min-w-fit">Abstract</h2>
            <p className="text-lg leading-relaxed">
              Diffusion models have revolutionized image editing but often generate images that violate physical
              laws, particularly the effects of objects on the scene, e.g., occlusions, shadows, and reflections. By
              analyzing the limitations of self-supervised approaches, we propose a practical solution centered
              on a &quot;counterfactual&quot; dataset. Our method involves capturing a scene before and after removing a
              single object, while minimizing other changes. By fine-tuning a diffusion model on this dataset, we
              are able to not only remove objects but also their effects on the scene. However, we find that
              applying this approach for photorealistic object insertion requires an impractically large dataset. To
              tackle this challenge, we propose bootstrap supervision; leveraging our object removal model
              trained on a small counterfactual dataset, we synthetically expand this dataset considerably. Our
              approach significantly outperforms prior methods in photorealistic object removal and insertion,
              particularly at modeling the effects of objects on the scene.
            </p>
          </div>
        </div>
      </section>

      {/* Object Removal Section */}
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Object Removal</h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto leading-relaxed">
            Our object removal model effectively eliminates objects and their effects on the scene from images. Despite being
            trained on a relatively small counterfactual dataset captured in controlled environments, the model demonstrates
            remarkable generalization to diverse scenarios, seamlessly removing large objects.
          </p>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg py-4 px-6 mb-8 text-center">
            <p className="text-blue-900 flex items-center justify-center gap-2">
              <span className="text-2xl">👆</span>
              <span>Click on any image to see results</span>
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <BeforeAfterSlider beforeSrc="/next.svg" afterSrc="/vercel.svg" label="Boat House" />
            <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/globe.svg" label="Hot Air Balloon" />
            <BeforeAfterSlider beforeSrc="/globe.svg" afterSrc="/file.svg" label="Helicopter" />
            <BeforeAfterSlider beforeSrc="/vercel.svg" afterSrc="/next.svg" label="Tiger" />
            <BeforeAfterSlider beforeSrc="/file.svg" afterSrc="/window.svg" label="Dog on Beach" />
            <BeforeAfterSlider beforeSrc="/next.svg" afterSrc="/vercel.svg" label="Whiskey Glass" />
            <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/globe.svg" label="Giraffe" />
            <BeforeAfterSlider beforeSrc="/globe.svg" afterSrc="/vercel.svg" label="Tree on Beach" />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <h2 className="text-3xl font-bold uppercase min-w-fit">Approach</h2>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                We collect a counterfactual dataset consisting of photos of scenes before and after removing an
                object, while keeping everything else fixed. We used this dataset to finetune a diffusion model to
                remove an object and all its effects from the scene. For the task of object insertion, we bootstrap
                bigger dataset by removing selected objects from a large unsupervised image dataset, resulting in
                a vast, synthetic counterfactual dataset. Training on this synthetic dataset and then fine tuning on
                a smaller, original, supervised dataset yields a high quality object insertion model.
              </p>

              {/* Approach Diagram placeholder */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="aspect-[2/1] bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  <span className="text-lg">Approach Diagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BibTeX Section */}
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <h2 className="text-3xl font-bold uppercase min-w-fit">BibTex</h2>
            <div className="flex-1">
              <pre className="bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto text-sm font-mono">
                {`@misc{winter2024objectdrop,
      title={ObjectDrop: Bootstrapping Counterfactuals for Photorealistic Object Removal and Insertion},
      author={Daniel Winter and Matan Cohen and Shlomi Fruchter and Yael Pritch and Alex Rav-Acha and Yedid Hoshen},
      year={2024},
      eprint={2403.18818},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-16 px-4 bg-gray-200 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <h2 className="text-3xl font-bold uppercase min-w-fit">Acknowledgment</h2>
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-6">
                We would like to thank to Gitartha Goswami, Soumyadip Ghosh, Reggie Ballesteros,
                Srimon Chatterjee, Michael Milne and James Adamson for providing the photographs
                that made this project possible. We thank Yaron Brodsky, Dana Berman, Amir Hertz,
                Moab Arar, and Oren Katzir for their invaluable feedback and discussions. We also
                appreciate the insights provided by Dani Lischinski and Daniel Cohen-Or, which helped
                improve this work.
              </p>
              <p className="text-lg leading-relaxed">
                We thank owners of images on this site (<a href="#" className="text-blue-600 hover:underline">link</a> for attributions) for sharing their valuable
                assets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
