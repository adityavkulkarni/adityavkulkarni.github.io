/**
 * projects.js — selected work.
 *
 * `claim` is the one line someone reads if they read nothing else.
 * Order matters: the list renders as authored.
 */

export const projects = [
  {
    id: 'contractiq',
    title: 'ContractIQ',
    subtitle: 'Agentic graph RAG for legal documents',
    claim: 'Retrieval across decades of scanned lease documents, with citations to the source page.',
    axis: 'ap',
    year: '2025',
    image: '/assets/ciq.jpg',
    body: 'Contracts, leases and amendments are parsed into an interconnected knowledge graph, so a question about a shared party or a chain of amendments becomes a traversal rather than a search. An agent classifies the intent behind the query and selects a retrieval strategy — vector, graph, or hybrid — then expands context recursively until the answer is supported by the source. Answers come back with the contract dates, financial terms, parties and amendment history that legal teams would otherwise spend hours assembling by hand.',
    stack: ['GPT-4o', 'LangChain', 'Neo4j', 'PostgreSQL', 'pgvector', 'Qwen3', 'PyTorch', 'Streamlit'],
    links: [{ label: 'GitHub', url: 'https://www.github.com/adityavkulkarni' }],
  },
  {
    id: 'media-analyzer',
    title: 'Media Bias Analyzer',
    subtitle: 'Streaming news classification pipeline',
    claim: 'Classifies media bias and sentiment on a live stream at up to 50 articles per minute.',
    axis: 'lr',
    year: '2024',
    image: '/assets/news.jpg',
    body: 'A streaming pipeline built on Kafka and Spark Structured Streaming, with fine-tuned DistilBERT models doing bias classification at 83% accuracy and sentiment at 91%. Throughput holds at up to fifty articles a minute. Results surface through the ELK stack for indexing and visualization, while MLflow handles experiment tracking, model versioning and the deployment lifecycle — giving the system a reproducible lifecycle rather than a single training run.',
    stack: ['Apache Kafka', 'Spark Streaming', 'Spark NLP', 'DistilBERT', 'MLflow', 'Elasticsearch', 'Kibana'],
    links: [
      { label: 'GitHub', url: 'https://github.com/adityavkulkarni/media-analyzer' },
      { label: 'Dashboard', url: 'https://github.com/adityavkulkarni/media-analyzer/blob/main/Media%20Bias%20Dashboard%20-%20Elastic.pdf' },
    ],
  },
  {
    id: 'grasping',
    title: 'Dynamic Object Grasping',
    subtitle: 'Predictive tracking for robotic manipulation',
    claim: 'Predictive trajectory planning for grasping objects already in motion.',
    axis: 'si',
    year: '2024',
    image: '/assets/ros.jpg',
    body: 'Real-time detection and tracking of deterministically moving objects, with a predictive algorithm computing grasp points and trajectories ahead of the target. Vision runs on OpenCV, control through ROS, and the whole loop is validated in Gazebo — with a clean interface between perception and actuation that allows either to be modified independently.',
    stack: ['ROS', 'Gazebo', 'OpenCV', 'Python', 'Robotic Manipulation'],
    links: [
      { label: 'GitHub', url: 'https://github.com/adityavkulkarni/2D_dynamic_object_grasping' },
      { label: 'Write-up', url: 'https://utdallas.app.box.com/s/mlh7mzs4jasjsx9vxsymagupyqrti79v' },
    ],
  },
  {
    id: 'agentic-pdf',
    title: 'Agentic PDF RAG',
    subtitle: 'Agentic RAG across PDFs and the open web',
    claim: 'Routes each query to the source that can answer it, and reports when none can.',
    axis: 'ap',
    year: '2025',
    image: '/assets/pdf.jpg',
    body: 'Accepts uploaded PDFs, supplied URLs, or both. An agent determines which source can answer a given question, prioritising uploaded documents over the open web, and states clearly when the question falls outside the supplied material. Reporting an unanswerable query is a deliberate design decision, and one many retrieval systems omit. Retrieval runs on semantic embeddings and QA models, with Qdrant handling vector search.',
    stack: ['OpenAI API', 'Qwen3', 'Qdrant', 'PyPDF2', 'BeautifulSoup', 'Streamlit', 'PostgreSQL'],
    links: [{ label: 'GitHub', url: 'https://github.com/adityavkulkarni/agentic-pdf-rag' }],
  },
  {
    id: 'investaid',
    title: 'InvestAid',
    subtitle: 'Aspect-based sentiment for market signal',
    claim: 'Aspect-based sentiment across 50,000 documents, reduced to ten market-relevant topics.',
    axis: 'lr',
    year: '2024',
    image: '/assets/investaid.jpg',
    body: 'An investment advisory system built on aspect-based sentiment detection. spaCy models read sentiment and topic across more than 50,000 social posts and financial news articles at 85% classification accuracy, surfacing ten topics that correlate with market movement. Combined with historical price analysis to produce position recommendations for the top three performers.',
    stack: ['spaCy', 'NLP', 'Sentiment Analysis', 'Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/sauravdosi/investaid' }],
  },
  {
    id: 'rnn-bptt',
    title: 'RNN Translation Model',
    subtitle: 'Recurrent translation trained with BPTT',
    claim: 'Sequence-to-sequence translation implemented from first principles.',
    axis: 'lr',
    year: '2024',
    image: '/assets/rnn.jpg',
    body: 'A sequence-to-sequence translation model built from first principles in PyTorch, with a custom RNN architecture trained via backpropagation through time. Handling variable-length inputs and outputs, and tracing gradient propagation across time steps, was the objective: understanding the mechanics rather than importing them.',
    stack: ['PyTorch', 'RNN', 'BPTT', 'NLP', 'Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/adityavkulkarni/6375_Project_RNN' }],
  },
];
