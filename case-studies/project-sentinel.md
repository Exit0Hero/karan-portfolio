# Project SENTINEL: AI-Based Network Attack Forecasting from Network Traffic Data

---

## Beat 1: The Problem

Network security teams face an overwhelming volume of alerts and logs, making it difficult to identify and respond to sophisticated attacks before they cause damage. Traditional intrusion detection systems rely on signature-based approaches that cannot detect novel attack patterns or predict attack trajectories before compromise occurs.

**Core Challenges:**
- **Alert Fatigue:** SOC analysts receive many alerts but lack a compact, evidence-backed view of where suspicious network trajectories may lead
- **Reactive Posture:** Static classifiers cannot represent temporal progression or provide useful forecast horizons
- **Temporal Blindness:** Traditional intrusion detection asks "Is this flow malicious?" rather than "What is likely to happen next?"
- **Evidence Gap:** Analysts need technically defensible forecasts with understandable evidence, not just alerts

**Constraints:**
- Local-first design: no cloud API required at runtime
- Stable contracts between pipeline stages
- Model output must retain provenance: input window, model version, horizon
- Components must fail clearly when required features are unavailable
- Prototype recommends investigation; does not automatically block traffic

**Non-goals:**
- Replace existing IDS, SIEM, firewall, or EDR systems
- Automatically take disruptive response actions
- Claim universal performance across unseen networks
- Treat feature attribution as proof of causation

---

## Beat 2: What I Did

**Architecture & System Design:**

Built a network attack forecasting system using temporal sequence models (GRU) to learn network state transitions and predict future attack trajectories.

**Technical Stack:**
- **Backend:** Python with uv package management
- **ML Framework:** PyTorch with GRU/LSTM temporal models
- **Dashboard:** Streamlit with Plotly for interactive visualization
- **Data Processing:** Pandas, NumPy for feature engineering
- **Infrastructure:** Docker containerization with reproducible benchmark pipeline

**Key Engineering Decisions:**

1. **Temporal Sequence Modeling:** Implemented GRU-based sequence models that learn network state transitions from ordered sequences of observed network states

2. **Multi-Head Architecture:** Designed separate prediction heads for next-state reconstruction, infiltration probability, attack-stage distribution, and affected-entity scoring

3. **Recursive Rollout:** Built K-step forward rollout capability that recursively predicts future network states, enabling trajectory forecasting

4. **Leakage-Safe Evaluation:** Implemented scenario-held-out validation with strict train/validation/test splits to prevent data leakage and ensure generalization testing

---

## Beat 3: What Came of It

**Performance Metrics (Synthetic Replay Benchmark):**
- **GRU Temporal Model F1:** 0.923 (vs 0.816 baseline logistic regression)
- **Precision:** 0.857 (temporal) vs 0.775 (baseline)
- **Recall:** 1.000 (temporal) vs 0.861 (baseline)
- **PR-AUC:** 0.953 (temporal) vs 0.926 (baseline)
- **False-Positive Rate:** 0.071 (temporal) vs 0.107 (baseline)
- **Threshold Calibration:** F1 improved from 0.914 to 0.933 with optimized threshold (0.40)

**Operational Results:**
- End-to-end pipeline runs reproducibly with leakage-safe scenario splits
- Recursive rollout increases early threshold crossings from 0.13 to 0.43
- Successfully deployed as microservice architecture with Streamlit dashboard
- Live detection capability for real-time network monitoring

**Visual Artifacts:**
- Architecture flowchart showing pipeline: ingestion → states → models → forecast → evaluation
- Dashboard with guided demo and Live Detection tab
- Walk-forward replay evaluation comparing forecast vs reality

**Code Repository:** [GitHub - Project SENTINEL](https://github.com/akkushon-kamen/SENTINEL)

---

*Case study drafted: September 2026*
*Follows Week 2 Three-Beat Structure for maximum clarity and impact*