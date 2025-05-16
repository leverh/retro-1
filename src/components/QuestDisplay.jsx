import '../css/quest.css';

const QuestDisplay = ({ quests }) => {
  const activeQuests = Object.values(quests).filter(quest => 
    quest.steps.some(step => !step.completed)
  );
  
  if (activeQuests.length === 0) {
    return (
      <div className="quest-display">
        <h3>Quests</h3>
        <p className="no-quests">No active quests.</p>
      </div>
    );
  }

  return (
    <div className="quest-display">
      <h3>Active Quests</h3>
      {activeQuests.map((quest, index) => (
        <div key={index} className="quest-item">
          <h4>{quest.title}</h4>
          <p className="quest-description">{quest.description}</p>
          
          <div className="quest-steps">
            {quest.steps.map((step, stepIndex) => (
              <div key={stepIndex} className={`quest-step ${step.completed ? 'completed' : ''}`}>
                <span className="step-status">{step.completed ? '✓' : '○'}</span>
                <span className="step-description">{step.description}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="quest-help">
        <p>Type 'quest' to see all quest details and hints.</p>
      </div>
    </div>
  );
};

export default QuestDisplay;
