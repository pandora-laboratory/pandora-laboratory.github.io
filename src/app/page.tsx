import BeforeAfterSlider from "./components/BeforeAfterSlider";
import HoverClickGallery from "./components/HoverClickGallery";
import InteractiveDemo from "./components/InteractiveDemo";
import QuantitativeTable from "./components/QuantitativeTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 text-white">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal leading-tight mb-8 px-4 flex flex-col items-center">
            <span className="flex items-center gap-2">
              PANDORA
              <img src="/eraser.svg" alt="Eraser" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 inline-block" />
              : Pixel-wise Attention Dissolution
            </span>
            <span>and Latent Guidance for Zero-Shot Object Removal</span>
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
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <a
              href="/PANDORA.pdf"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors"
              rel="noopener noreferrer"
            >
              PDF
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors cursor-not-allowed opacity-75 relative"
              title="Coming soon"
            >
              arXiv
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full font-bold transform rotate-12">
                Soon
              </span>
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded border border-slate-500 transition-colors cursor-not-allowed opacity-75 relative"
              title="Coming soon"
            >
              Code
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full font-bold transform rotate-12">
                Soon
              </span>
            </a>
          </div>

          {/* Hero Video Demo */}
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl text-gray-700 font-light mb-6">Demo Video</h2>
            <div className="aspect-video bg-white rounded overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
              Removing objects from natural images remains a formidable challenge, often hindered by the inability to synthesize semantically appropriate content in the foreground while preserving background integrity. Existing methods often rely on fine-tuning, prompt engineering, or inference-time optimization, yet still struggle to maintain texture consistency, produce rigid or unnatural results, lack precise foreground-background disentanglement, and fail to flexibly handle multiple objects—ultimately limiting their scalability and practical applicability. In this paper, we propose a zero-shot object removal framework that operates directly on pre-trained text-to-image diffusion models—requiring no fine-tuning, no prompts, and no optimization. At the core is our Pixel-wise Attention Dissolution, which performs fine-grained, pixel-wise dissolution of object information by nullifying the most correlated keys for each masked pixel. This operation causes the object to vanish from the self-attention flow, allowing the coherent background context to seamlessly dominate the reconstruction. To complement this, we introduce Localized Attentional Disentanglement Guidance, which steers the denoising process toward latent manifolds that favor clean object removal. Together, Pixel-wise Attention Dissolution and Localized Attentional Disentanglement Guidance enable precise, non-rigid, scalable, and prompt-free multi-object erasure in a single pass. Experiments show our method outperforms state-of-the-art methods even with fine-tuned and prompt-guided baselines in both visual fidelity and semantic plausibility.
            </p>
          </div>
        </div>
      </section>

      {/* Object Removal Section */}
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Object Removal</h2>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">
            We propose a zero-shot object removal framework that operates directly on pre-trained diffusion models in a single pass, without any fine-tuning, prompt engineering, or inference-time optimization, thus fully leveraging their latent generative capacity for inpainting
          </p>

          {/* Info Box */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg py-4 px-6 mb-8 text-center">
            <p className="text-blue-900 flex items-center justify-center gap-2">
              <span className="text-2xl">👆</span>
              <span>Slide any image to see results</span>
            </p>
          </div> */}

          {/* Image Gallery Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <BeforeAfterSlider beforeSrc="/results/img_1_original.png" afterSrc="/results/img_1_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_2_original.png" afterSrc="/results/img_2_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_3_original.png" afterSrc="/results/img_3_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_4_original.png" afterSrc="/results/img_4_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_5_original.png" afterSrc="/results/img_5_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_6_original.png" afterSrc="/results/img_6_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_7_original.png" afterSrc="/results/img_7_result.png" label="" />
            <BeforeAfterSlider beforeSrc="/results/img_8_original.png" afterSrc="/results/img_8_result.png" label="" />
          </div> */}
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="pt-2 pb-16 px-4 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-3xl font-bold uppercase text-center mb-6">Interactive Results</h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto leading-relaxed">
            Hover over any image to see the object that will be removed, and click to toggle between original and result
          </p> */}

          {/* Info Box */}
          <div className="bg-green-50 border border-green-200 rounded-lg py-4 px-6 mb-8 text-center">
            <p className="text-green-900 flex items-center justify-center gap-2">
              <span className="text-2xl">🖱️</span>
              <span>Click to see results</span>
            </p>
          </div>

          {/* Interactive Gallery */}
          <HoverClickGallery
            items={[
              { id: "1", originalSrc: "/results/img_1_original.png", resultSrc: "/results/img_1_result.png", maskSrc: "/results/img_1_mask.png" },
              { id: "2", originalSrc: "/results/img_2_original.png", resultSrc: "/results/img_2_result.png", maskSrc: "/results/img_2_mask.png" },
              { id: "3", originalSrc: "/results/img_3_original.png", resultSrc: "/results/img_3_result.png", maskSrc: "/results/img_3_mask.png" },
              { id: "4", originalSrc: "/results/img_4_original.png", resultSrc: "/results/img_4_result.png", maskSrc: "/results/img_4_mask.png" },
              { id: "5", originalSrc: "/results/img_5_original.png", resultSrc: "/results/img_5_result.png", maskSrc: "/results/img_5_mask.png" },
              { id: "6", originalSrc: "/results/img_6_original.png", resultSrc: "/results/img_6_result.png", maskSrc: "/results/img_6_mask.png" },
              { id: "7", originalSrc: "/results/img_7_original.png", resultSrc: "/results/img_7_result.png", maskSrc: "/results/img_7_mask.png" },
              { id: "8", originalSrc: "/results/img_8_original.png", resultSrc: "/results/img_8_result.png", maskSrc: "/results/img_8_mask.png" },
            ]}
          />
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Approach</h2>
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Our framework performs zero-shot object removal directly on a pre-trained diffusion model. Given an input image <i>I<sub>s</sub></i> and a binary mask <i>M</i> specifying the target objects, the model produces an edited image <i>I<sub>t</sub></i> where the masked regions are erased and seamlessly reconstructed with contextually consistent background. The process begins with latent inversion to map the input image into the noise space while preserving unaffected regions in the denoising process. We then apply <strong>Pixel-wise Attention Dissolution (PAD)</strong> to disconnect masked query pixels from their most correlated keys, effectively dissolving object information at the attention level. Next, <strong>Localized Attentional Disentanglement Guidance (LADG)</strong> steers the denoising trajectory in latent space away from the object regions, refining the reconstruction to suppress residual artifacts.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Together, PAD and LADG enable precise, pixel-level control for single- and multi-object removal in a single forward pass, without any fine-tuning, prompt engineering, or inference-time optimization.
            </p>

            {/* Approach Diagram */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <img
                src="/pipeline.png"
                alt="PANDORA Pipeline Diagram"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualitative Comparison Section */}
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Qualitative Comparison</h2>

          {/* Enhanced Caption with Icons */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-lg text-center mb-4 text-blue-900">
                <span className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">🔬</span>
                  <span className="font-semibold">Qualitative comparison on various object removal scenarios</span>
                </span>
                <span className="flex items-center justify-center gap-2 text-base">
                  <span className="text-xl">📊</span>
                  <span>From left to right: original image with a mask, and results from different methods</span>
                </span>
              </p>
            </div>

            {/* Scenario Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-green-900 mb-1">Single-Object Removal</h3>
                <p className="text-sm text-green-700">Top two rows</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯🎯</div>
                <h3 className="font-semibold text-orange-900 mb-1">Multi-Object Cases</h3>
                <p className="text-sm text-orange-700">Middle two rows</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯🎯🎯</div>
                <h3 className="font-semibold text-purple-900 mb-1">Mass-Similar Objects</h3>
                <p className="text-sm text-purple-700">Bottom two rows</p>
              </div>
            </div>

            {/* Zero-shot Methods Highlight */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-800">
                <span className="text-xl mr-2">⚡</span>
                <span className="font-semibold">Zero-shot methods</span> shown in the last three columns, with the <span className="font-bold text-blue-600">last column showing our PANDORA method</span>
              </p>
            </div>
          </div>

          {/* Qualitative Comparison Image */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <img
              src="/qualitative.png"
              alt="Qualitative comparison of object removal methods"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quantitative Comparison Section */}
      <section className="py-16 px-4 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Quantitative Comparison</h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <QuantitativeTable />
          </div>
        </div>
      </section>

      {/* BibTeX Section - Commented for now
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
      */}

      {/* Acknowledgment Section */}
      <section className="py-16 px-4 bg-gray-200 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">Acknowledgment</h2>
          <div className="flex-1">
            {/* User Study Participants */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🙏</span>
                <h3 className="text-xl font-semibold text-blue-900">User Study Participants</h3>
              </div>
              <p className="text-lg leading-relaxed text-blue-800">
                We extend our heartfelt gratitude to all participants who took part in our comprehensive user study. Your valuable time, thoughtful feedback, and detailed evaluations were instrumental in validating the effectiveness and usability of our PANDORA framework. Your insights helped us understand the practical impact of our zero-shot object removal approach and provided crucial evidence of its superiority over existing methods.
              </p>
            </div>

            {/* Website Design Credit */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎨</span>
                <h3 className="text-xl font-semibold text-green-900">Website Design Inspiration</h3>
              </div>
              <p className="text-lg leading-relaxed text-green-800">
                This website design is inspired by{" "}
                <a
                  href="https://objectdrop.github.io/"
                  className="text-blue-600 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ObjectDrop
                </a>. We thank the authors for their excellent work and creative design approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
