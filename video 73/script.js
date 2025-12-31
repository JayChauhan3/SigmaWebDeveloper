// // 1. Select and style the main container
// const container = document.getElementById('playlist-container');
// container.style.maxWidth = '360px';
// container.style.margin = '20px';
// container.style.fontFamily = 'Arial, sans-serif';

// // 2. Create the main card
// const card = document.createElement('div');
// card.style.display = 'flex';
// card.style.gap = '12px';
// card.style.width = '350px';
// card.style.padding = '8px';
// card.style.borderBottom = '1px solid #ccc';
// card.style.cursor = 'pointer';

// // 3. Create thumbnail wrapper
// const thumbWrapper = document.createElement('div');
// thumbWrapper.style.position = 'relative';
// thumbWrapper.style.width = '160px';
// thumbWrapper.style.height = '90px';

// // 4. Create thumbnail image
// const thumb = document.createElement('img');
// thumb.src = 'harry.jpg'; // Replace with actual image
// thumb.alt = 'Video Thumbnail';
// thumb.style.width = '100%';
// thumb.style.height = '100%';
// thumb.style.borderRadius = '4px';
// thumb.style.objectFit = 'cover';

// // 5. Create timeline box
// const timeBox = document.createElement('div');
// timeBox.textContent = '12:34'; // Example duration
// timeBox.style.position = 'absolute';
// timeBox.style.bottom = '4px';
// timeBox.style.right = '4px';
// timeBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
// timeBox.style.color = '#fff';
// timeBox.style.fontSize = '11px';
// timeBox.style.padding = '2px 4px';
// timeBox.style.borderRadius = '2px';
// timeBox.style.fontWeight = 'bold';

// // 6. Append thumbnail and time to wrapper
// thumbWrapper.appendChild(thumb);
// thumbWrapper.appendChild(timeBox);

// // 7. Create info section
// const info = document.createElement('div');
// info.style.flex = '1';
// info.style.display = 'flex';
// info.style.flexDirection = 'column';
// info.style.justifyContent = 'space-between';

// // 8. Title
// const title = document.createElement('div');
// title.textContent = 'Info about DOM #66';
// title.style.fontSize = '14px';
// title.style.fontWeight = 'bold';
// title.style.lineHeight = '1.4';
// title.style.marginBottom = '4px';

// // 9. Channel
// const channel = document.createElement('div');
// channel.textContent = 'Harry Styles';
// channel.style.fontSize = '13px';
// channel.style.color = '#606060';
// channel.style.marginBottom = '2px';

// // 10. Meta info
// const meta = document.createElement('div');
// meta.textContent = '1.2M views • 3 weeks ago';
// meta.style.fontSize = '12px';
// meta.style.color = '#909090';

// // 11. Append info parts
// info.appendChild(title);
// info.appendChild(channel);
// info.appendChild(meta);

// // 12. Append everything to card
// card.appendChild(thumbWrapper);
// card.appendChild(info);

// // 13. Append card to container
// container.appendChild(card);

const container = document.getElementById('playlist-container');
Object.assign(container.style, {
  maxWidth: '360px',
  margin: '200px',
  fontFamily: 'Arial, sans-serif',
});

const card = document.createElement('div');
Object.assign(card.style, {
  display: 'flex',
  gap: '12px',
  width: '350px',
  padding: '8px',
  borderBottom: '1px solid #ccc',
  cursor: 'pointer',
});

// Thumbnail wrapper
const thumbWrapper = document.createElement('div');
Object.assign(thumbWrapper.style, {
  position: 'relative',
  width: '160px',
  height: '90px',
});

// Thumbnail image
const thumb = document.createElement('img');
thumb.src = 'harry.jpg';
Object.assign(thumb.style, {
  width: '100%',
  height: '100%',
  borderRadius: '4px',
  objectFit: 'cover',
});

// Timeline box
const timeBox = document.createElement('div');
timeBox.textContent = '12:34';
Object.assign(timeBox.style, {
  position: 'absolute',
  bottom: '4px',
  right: '4px',
  backgroundColor: 'rgba(0,0,0,0.8)',
  color: '#fff',
  fontSize: '11px',
  padding: '2px 4px',
  borderRadius: '2px',
  fontWeight: 'bold',
});

thumbWrapper.append(thumb, timeBox);

// Info section
const info = document.createElement('div');
Object.assign(info.style, {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

// Helper to create info text elements
const createInfoText = (text, fontSize, color, marginBottom = '0') => {
  const el = document.createElement('div');
  el.textContent = text;
  Object.assign(el.style, {
    fontSize,
    color,
    marginBottom,
    fontWeight: fontSize === '14px' ? 'bold' : 'normal',
    lineHeight: '1.4',
  });
  return el;
};

info.append(
  createInfoText('Info about DOM #66', '14px', '#000', '4px'),
  createInfoText('Harry Styles', '13px', '#606060', '2px'),
  createInfoText('1.2M views • 3 weeks ago', '12px', '#909090')
);

card.append(thumbWrapper, info);
container.appendChild(card);




