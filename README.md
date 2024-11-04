# Binary to ASCII Converter 🤓

A simple, web-based tool for converting binary text to ASCII characters. This project was inspired by playful binary conversations in the GitHubStreak community.

## 🌟 Features

- Convert binary strings to readable ASCII text
- Clean, user-friendly interface
- Real-time error validation
- Supports spaces in binary input
- Sample binary messages included
- SASS-based styling

## 🚀 Demo Examples

### Say "Hello" in Binary
```
Input:  01001000 01100101 01101100 01101100 01101111
Output: Hello
```

### Quick "LoL" in Binary
```
Input:  01001100 01101111 01001100
Output: LoL
```

## 💻 Usage

1. Open `index.html` in your web browser
2. Paste or type your binary string into the input field
   - Spaces are optional
   - Each character must be 8 bits
3. Click "Convert to ASCII" 
4. See your converted text in the output field

## ⚠️ Error Handling

The converter validates input for:
- Only 0s and 1s allowed
- Input length must be a multiple of 8 bits
- Spaces are automatically removed before processing

## 🗂️ Project Structure

```
binary2ascii/
├── index.html
├── js/
│   └── script.js
└── css/
    ├── style.css
    └── style.scss
```

## 🎯 Project Background

This project emerged from fun conversations in the GitHubStreak community. Instead of constantly looking up binary-to-text converters online, I created this simple tool to quickly decode binary messages.

## 🔮 Future Enhancements

- Add ASCII to Binary conversion
- Add HEX to ASCII convertion
- Support for different encodings (UTF-8, UTF-16)
- Copy button for results
- Dark mode support
- History of recent conversions
- Binary message templates for common phrases

## 🤝 Contributing

Feel free to:
1. Fork the repository
2. Create your feature branch
3. Submit a pull request
4. Or just say "01001000 01101001" (Hi) 👋

## 📝 License

This project is open source and available under the MIT License.

---
Made with 💻 by Iyola Oyabiyi for the GitHubStreak community.