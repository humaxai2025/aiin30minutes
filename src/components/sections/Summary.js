import React, { useState, useEffect } from 'react';
import { CheckCircle, Trophy, Star, Sparkles, X, Download, Share2 } from 'lucide-react';

const Summary = ({ isDark, learnerName = "Learner" }) => {
  const [showCelebration, setShowCelebration] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [showCertificate, setShowCertificate] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);


  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setAnimationPhase('celebration'), 500);
    const timer2 = setTimeout(() => setAnimationPhase('settle'), 8000);
    const timer3 = setTimeout(() => setShowCelebration(false), 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className={`confetti confetti-${i % 6 + 1}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  ));

  const floatingStars = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="floating-star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 1}s`
      }}
    >
      ⭐
    </div>
  ));

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareOnLinkedIn = () => {
    const text = `🎓 Just completed the "AI in 30 Minutes" interactive tutorial by HumanXAI! Great introduction to artificial intelligence fundamentals - highly recommend for anyone looking to understand AI basics.`;
    const url = encodeURIComponent(window.location.origin);
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text + ' ' + window.location.origin)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const shareOnTwitter = () => {
    const text = `🎓 Just completed "AI in 30 Minutes" by @HumanXAI! 🤖✨\n\nGreat interactive tutorial covering AI fundamentals. Perfect for beginners looking to understand artificial intelligence!\n\n#AI #MachineLearning #Education #Tech`;
    const url = encodeURIComponent(window.location.origin);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
    window.open(twitterUrl, '_blank', 'width=600,height=600');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.origin);
    const text = encodeURIComponent(`I just completed the "AI in 30 Minutes" interactive tutorial! 🎓 Great way to learn AI fundamentals.`);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    window.open(facebookUrl, '_blank', 'width=600,height=600');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin).then(() => {
      alert('🔗 Link copied to clipboard! Share it anywhere you like.');
      setShowShareModal(false);
    }).catch(() => {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = window.location.origin;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('🔗 Link copied to clipboard! Share it anywhere you like.');
      setShowShareModal(false);
    });
  };



  const downloadCertificateAsImage = async () => {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return;

    try {
      // Create a much more detailed and accurate certificate
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set high resolution
      const scale = 3;
      canvas.width = 1200 * scale;
      canvas.height = 900 * scale;
      ctx.scale(scale, scale);
      
      // Fill background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 1200, 900);
      gradient.addColorStop(0, '#f8f9ff');
      gradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1200, 900);
      
      // Draw main border (double border effect)
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 8;
      ctx.strokeRect(40, 40, 1120, 820);
      ctx.lineWidth = 4;
      ctx.strokeRect(48, 48, 1104, 804);
      
      // Draw corner decorations
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      const cornerSize = 20;
      
      // Top-left
      ctx.beginPath();
      ctx.moveTo(60, 60);
      ctx.lineTo(60, 60 + cornerSize);
      ctx.moveTo(60, 60);
      ctx.lineTo(60 + cornerSize, 60);
      ctx.stroke();
      
      // Top-right
      ctx.beginPath();
      ctx.moveTo(1140, 60);
      ctx.lineTo(1140, 60 + cornerSize);
      ctx.moveTo(1140, 60);
      ctx.lineTo(1140 - cornerSize, 60);
      ctx.stroke();
      
      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(60, 840);
      ctx.lineTo(60, 840 - cornerSize);
      ctx.moveTo(60, 840);
      ctx.lineTo(60 + cornerSize, 840);
      ctx.stroke();
      
      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(1140, 840);
      ctx.lineTo(1140, 840 - cornerSize);
      ctx.moveTo(1140, 840);
      ctx.lineTo(1140 - cornerSize, 840);
      ctx.stroke();
      
      // Calculate centered header positioning
      const centerX = 600; // Canvas center
      const trophyRadius = 35;
      const trophyToTextGap = 20;
      
      // Measure the brand text to calculate total width
      ctx.font = 'bold 32px Arial';
      const brandTextMetrics = ctx.measureText('HumanXAI');
      const brandTextWidth = brandTextMetrics.width;
      
      ctx.font = '18px Arial';
      const subtitleMetrics = ctx.measureText('Learning Platform');
      const subtitleWidth = subtitleMetrics.width;
      const maxTextWidth = Math.max(brandTextWidth, subtitleWidth);
      
      // Calculate total header group width
      const totalHeaderWidth = (trophyRadius * 2) + trophyToTextGap + maxTextWidth;
      
      // Calculate starting positions for centered group
      const headerStartX = centerX - (totalHeaderWidth / 2);
      const trophyX = headerStartX + trophyRadius;
      const textStartX = headerStartX + (trophyRadius * 2) + trophyToTextGap;
      
      // Draw trophy background circle
      ctx.fillStyle = '#eff6ff';
      ctx.beginPath();
      ctx.arc(trophyX, 140, trophyRadius, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw trophy icon
      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🏆', trophyX, 150);
      
      // Draw brand text (left-aligned from textStartX)
      ctx.textAlign = 'left';
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#111827';
      ctx.fillText('Human', textStartX, 135);
      
      // Measure "Human" to position "X" and "AI"
      const humanMetrics = ctx.measureText('Human');
      const xStartX = textStartX + humanMetrics.width;
      
      ctx.fillStyle = '#2563eb'; // Blue color for X
      ctx.fillText('X', xStartX, 135);
      
      const xMetrics = ctx.measureText('X');
      const aiStartX = xStartX + xMetrics.width;
      
      ctx.fillStyle = '#111827'; // Back to black for AI
      ctx.fillText('AI', aiStartX, 135);
      
      // Draw subtitle, centered under the brand text
      ctx.font = '18px Arial';
      ctx.fillStyle = '#6b7280';
      const brandCenterX = textStartX + (brandTextWidth / 2);
      ctx.textAlign = 'center';
      ctx.fillText('Learning Platform', brandCenterX, 160);
      
      // Main title (centered)
      ctx.font = 'bold 48px serif';
      ctx.fillStyle = '#1e40af';
      ctx.textAlign = 'center';
      ctx.fillText('Certificate of Completion', centerX, 230);
      
      // Draw title underline
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(420, 245, 360, 4);
      
      // Certificate text
      ctx.font = '24px Arial';
      ctx.fillStyle = '#374151';
      ctx.fillText('This is to certify that', centerX, 320);
      
      // Name with styling
      ctx.font = 'bold 42px Arial';
      ctx.fillStyle = '#111827';
      ctx.fillText(learnerName, centerX, 380);
      
      // Name underline
      const nameMetrics = ctx.measureText(learnerName);
      ctx.fillStyle = '#ddd6fe';
      ctx.fillRect(centerX - nameMetrics.width/2 - 30, 390, nameMetrics.width + 60, 3);
      
      ctx.font = '24px Arial';
      ctx.fillStyle = '#374151';
      ctx.fillText('has successfully completed the', centerX, 440);
      
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#1e40af';
      ctx.fillText('AI in 30 Minutes: Interactive Tutorial', centerX, 490);
      
      // Description
      ctx.font = '18px Arial';
      ctx.fillStyle = '#6b7280';
      ctx.fillText('Demonstrating mastery of fundamental artificial intelligence concepts including', centerX, 540);
      ctx.fillText('AI definitions, machine learning principles, AI applications, and future implications', centerX, 565);
      
      // Footer section
      ctx.font = '16px Arial';
      ctx.fillStyle = '#6b7280';
      
      // Date section
      ctx.fillText('Date of Completion', 250, 720);
      ctx.fillStyle = '#9ca3af';
      ctx.fillRect(180, 730, 140, 2);
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#374151';
      ctx.fillText(getCurrentDate(), 250, 750);
      
      // Achievement badge
      ctx.fillStyle = '#eff6ff';
      ctx.beginPath();
      ctx.arc(centerX, 700, 45, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = '#2563eb';
      ctx.font = '36px Arial';
      ctx.fillText('⭐', centerX, 715);
      ctx.font = '14px Arial';
      ctx.fillStyle = '#6b7280';
      ctx.fillText('Achievement Badge', centerX, 760);
      
      // Authorized by section
      ctx.font = '16px Arial';
      ctx.fillStyle = '#6b7280';
      ctx.fillText('Authorized by', 950, 720);
      ctx.fillStyle = '#9ca3af';
      ctx.fillRect(880, 730, 140, 2);
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#374151';
      ctx.fillText('HumanXAI Learning', 950, 750);
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `AI-Certificate-${learnerName.replace(/\s+/g, '-')}-${new Date().getFullYear()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png', 1.0);
      
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Unable to generate certificate image. Please try the print option or take a screenshot of the certificate.');
    }
  };

  const printCertificate = () => {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return;

    const printWindow = window.open('', '_blank', 'width=1000,height=700');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>AI Fundamentals Certificate - ${learnerName}</title>
          <meta charset="UTF-8">
          <style>
            @page { 
              margin: 0.5in; 
              size: landscape;
            }
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body { 
              font-family: 'Arial', sans-serif;
              background: white;
              padding: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 90vh;
            }
            
            .certificate-container {
              background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
              border: 4px double #2563eb;
              border-radius: 8px;
              padding: 60px;
              width: 100%;
              max-width: 900px;
              position: relative;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .corner-decoration {
              position: absolute;
              width: 20px;
              height: 20px;
              border: 2px solid #2563eb;
            }
            
            .corner-decoration.top-left {
              top: 10px;
              left: 10px;
              border-right: none;
              border-bottom: none;
            }
            
            .corner-decoration.top-right {
              top: 10px;
              right: 10px;
              border-left: none;
              border-bottom: none;
            }
            
            .corner-decoration.bottom-left {
              bottom: 10px;
              left: 10px;
              border-right: none;
              border-top: none;
            }
            
            .corner-decoration.bottom-right {
              bottom: 10px;
              right: 10px;
              border-left: none;
              border-top: none;
            }
            
            .header {
              text-align: center;
              margin-bottom: 40px;
            }
            
            .brand {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
            }
            
            .logo {
              width: 50px;
              height: 50px;
              background: #eff6ff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 15px;
              font-size: 24px;
            }
            
            .brand-text h1 {
              font-size: 24px;
              font-weight: bold;
              color: #111827;
              margin: 0;
            }
            
            .brand-text p {
              font-size: 12px;
              color: #6b7280;
              margin: 0;
            }
            
            .title {
              font-size: 36px;
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 10px;
              font-family: serif;
            }
            
            .title-underline {
              width: 200px;
              height: 3px;
              background: #2563eb;
              margin: 0 auto;
            }
            
            .content {
              text-align: center;
              margin-bottom: 60px;
            }
            
            .certify-text {
              font-size: 18px;
              color: #374151;
              margin-bottom: 15px;
            }
            
            .name {
              font-size: 32px;
              font-weight: bold;
              color: #111827;
              margin: 20px 0;
              padding-bottom: 5px;
              border-bottom: 2px solid #ddd6fe;
              display: inline-block;
              padding-left: 30px;
              padding-right: 30px;
            }
            
            .completion-text {
              font-size: 18px;
              color: #374151;
              margin-bottom: 15px;
            }
            
            .course-title {
              font-size: 24px;
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 25px;
            }
            
            .description {
              font-size: 14px;
              color: #6b7280;
              line-height: 1.6;
              max-width: 600px;
              margin: 0 auto;
            }
            
            .footer {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            
            .footer-section {
              text-align: center;
              flex: 1;
            }
            
            .footer-line {
              width: 120px;
              height: 1px;
              background: #9ca3af;
              margin: 0 auto 8px;
            }
            
            .footer-label {
              font-size: 12px;
              color: #6b7280;
              margin-bottom: 5px;
            }
            
            .footer-value {
              font-size: 12px;
              font-weight: bold;
              color: #374151;
            }
            
            .badge {
              width: 80px;
              height: 80px;
              background: #eff6ff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 8px;
              font-size: 32px;
            }
            
            @media print {
              body { 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              .certificate-container {
                box-shadow: none !important;
                page-break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <div class="certificate-container">
            <div class="corner-decoration top-left"></div>
            <div class="corner-decoration top-right"></div>
            <div class="corner-decoration bottom-left"></div>
            <div class="corner-decoration bottom-right"></div>
            
            <div class="header">
              <div class="brand">
                <div class="logo">🏆</div>
                <div class="brand-text">
                  <h1>Human<span style="color: #2563eb;">X</span>AI</h1>
                  <p>Learning Platform</p>
                </div>
              </div>
              <div class="title">Certificate of Completion</div>
              <div class="title-underline"></div>
            </div>
            
            <div class="content">
              <div class="certify-text">This is to certify that</div>
              <div class="name">${learnerName}</div>
              <div class="completion-text">has successfully completed the</div>
              <div class="course-title">AI in 30 Minutes: Interactive Tutorial</div>
              <div class="description">
                Demonstrating mastery of fundamental artificial intelligence concepts including
                AI definitions, machine learning principles, AI applications, and future implications
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-section">
                <div class="footer-line"></div>
                <div class="footer-label">Date of Completion</div>
                <div class="footer-value">${getCurrentDate()}</div>
              </div>
              
              <div class="footer-section">
                <div class="badge">⭐</div>
                <div class="footer-label">Achievement Badge</div>
              </div>
              
              <div class="footer-section">
                <div class="footer-line"></div>
                <div class="footer-label">Authorized by</div>
                <div class="footer-value">HumanXAI Learning</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Auto-trigger print dialog after a short delay
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 500);
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full rounded-xl p-6 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } shadow-2xl`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🎉 Share Your Achievement
          </h3>
          <button
            onClick={() => setShowShareModal(false)}
            className={`p-2 hover:bg-gray-200 rounded-full transition-colors ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Share your achievement with detailed course information and link!
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={shareOnLinkedIn}
            className="flex flex-col items-center p-4 rounded-lg border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-8 h-8 mb-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-bold text-sm">in</span>
            </div>
            <span className="font-medium">LinkedIn</span>
            <span className="text-xs opacity-90">Professional</span>
          </button>

          <button
            onClick={shareOnTwitter}
            className="flex flex-col items-center p-4 rounded-lg border-2 border-black bg-black text-white hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-8 h-8 mb-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">𝕏</span>
            </div>
            <span className="font-medium">X (Twitter)</span>
            <span className="text-xs opacity-90">Quick share</span>
          </button>

          <button
            onClick={shareOnFacebook}
            className="flex flex-col items-center p-4 rounded-lg border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-8 h-8 mb-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">f</span>
            </div>
            <span className="font-medium">Facebook</span>
            <span className="text-xs opacity-90">Friends & family</span>
          </button>

          <button
            onClick={copyLink}
            className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
              isDark 
                ? 'border-gray-600 bg-gray-700 text-white hover:bg-gray-600' 
                : 'border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            <div className={`w-8 h-8 mb-2 rounded-full flex items-center justify-center ${
              isDark ? 'bg-gray-600' : 'bg-white'
            }`}>
              <span className="text-lg">🔗</span>
            </div>
            <span className="font-medium">Copy Link</span>
            <span className="text-xs opacity-75">Share anywhere</span>
          </button>
        </div>

        <div className={`text-center text-xs p-3 rounded-lg ${
          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
        }`}>
          💡 Each post includes your achievement details, course highlights, and a direct link to try the tutorial
        </div>
      </div>
    </div>
  );



  const CertificateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={() => setShowCertificate(false)}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        {/* Certificate */}
        <div 
          id="certificate"
          className="bg-white rounded-lg shadow-2xl certificate-container w-full"
          style={{ aspectRatio: '4/3', maxHeight: '80vh' }}
        >
          {/* Decorative Border */}
          <div className="border-4 border-double border-blue-600 h-full relative p-4 md:p-6">
            {/* Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-600"></div>
            
            {/* Header */}
            <div className="text-center mb-4 md:mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">
                    Human<span className="text-blue-600">X</span>AI
                  </h1>
                  <p className="text-xs text-gray-600">Learning Platform</p>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-blue-800 mb-2">Certificate of Completion</h2>
              <div className="w-16 md:w-20 h-0.5 bg-blue-600 mx-auto"></div>
            </div>
            
            {/* Main Content */}
            <div className="text-center mb-4 md:mb-6 flex-1">
              <p className="text-sm md:text-base text-gray-700 mb-2">This is to certify that</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 border-b-2 border-blue-200 pb-1 inline-block px-4">
                {learnerName}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                has successfully completed the
              </p>
              <h4 className="text-lg md:text-xl font-semibold text-blue-800 mb-4">
                AI in 30 Minutes: Interactive Tutorial
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mb-4 px-2">
                Demonstrating mastery of fundamental artificial intelligence concepts including
                AI definitions, machine learning principles, AI applications, and future implications
              </p>
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-end mt-auto">
              <div className="text-center flex-1">
                <div className="w-20 md:w-24 h-0.5 bg-gray-400 mb-1 mx-auto"></div>
                <p className="text-xs text-gray-600">Date of Completion</p>
                <p className="text-xs font-semibold text-gray-800">{getCurrentDate()}</p>
              </div>
              
              <div className="text-center flex-1 mx-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-1 mx-auto">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <p className="text-xs text-gray-500">Achievement Badge</p>
              </div>
              
              <div className="text-center flex-1">
                <div className="w-20 md:w-24 h-0.5 bg-gray-400 mb-1 mx-auto"></div>
                <p className="text-xs text-gray-600">Authorized by</p>
                <p className="text-xs font-semibold text-gray-800">HumanXAI Learning</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certificate Actions */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={downloadCertificateAsImage}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Certificate
          </button>
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Achievement
          </button>
        </div>
        
        {/* Instructions */}
        <div className="text-center mt-4">
          <p className="text-white text-sm">
            📥 Download as high-quality PNG • 📱 Share your success story
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center relative overflow-hidden">
      {/* Celebration Animation Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiElements}
          {floatingStars}
          
          {/* Central celebration burst */}
          <div className={`celebration-burst ${animationPhase}`}>
            <div className="burst-circle"></div>
            <div className="burst-rays"></div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && <CertificateModal />}

      {/* Share Modal */}
      {showShareModal && <ShareModal />}

      {/* Main Content */}
      <div className={`celebration-content ${animationPhase}`}>
        {/* Trophy Animation */}
        <div className={`trophy-container ${animationPhase}`}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 trophy-glow ${
            isDark ? 'bg-yellow-900' : 'bg-yellow-100'
          }`}>
            <Trophy className={`w-12 h-12 trophy-icon ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
          </div>
        </div>

        {/* Personalized Celebration Message */}
        <div className={`celebration-text ${animationPhase}`}>
          <h2 className={`text-4xl font-bold mb-2 celebration-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🎉 Congratulations {learnerName}! 🎉
          </h2>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className={`w-6 h-6 mr-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <p className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              You've mastered AI fundamentals!
            </p>
            <Sparkles className={`w-6 h-6 ml-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <p className={`text-lg mb-8 celebration-subtitle ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            You're now ready to explore the exciting world of AI with confidence!
          </p>
        </div>

        {/* Achievement Badge - Now Centered and Clickable */}
        <div className={`achievement-badge ${animationPhase} mx-auto mb-8 flex justify-center`}>
          <div 
            onClick={() => setShowCertificate(true)}
            className={`p-6 rounded-lg border-2 border-dashed max-w-md cursor-pointer hover:scale-105 transition-transform duration-200 ${
              isDark ? 'border-green-400 bg-green-900/20 hover:bg-green-900/30' : 'border-green-600 bg-green-50 hover:bg-green-100'
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <Star className={`w-6 h-6 mr-2 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`font-bold text-lg ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                AI Fundamentals Certificate
              </span>
              <Star className={`w-6 h-6 ml-2 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <p className={`text-sm mb-3 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
              Awarded to <strong>{learnerName}</strong>
            </p>
            <p className={`text-xs font-medium ${isDark ? 'text-green-300' : 'text-green-600'}`}>
              📜 Click to view your certificate
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className={`p-6 rounded-lg mb-8 fade-in-content ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🧠 What {learnerName} Now Knows
        </h3>
        <div className="space-y-3 text-left">
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              AI = Software that learns from data to perform intelligent tasks
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Already everywhere - your phone, email, shopping, navigation
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Narrow AI dominates today - each system does one thing well
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Benefits are huge but we need to address legitimate concerns
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Future is bright with responsible development
            </span>
          </div>
        </div>
      </div>
      
      {/* Next Steps */}
      <div className={`p-6 rounded-lg fade-in-content ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
        <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🚀 {learnerName}'s Next Adventure
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Beginner level:
            </h4>
            <ul className={`space-y-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Try ChatGPT or Google Bard for everyday tasks</li>
              <li>• Notice AI features in apps you already use</li>
              <li>• Read one article per week about AI developments</li>
            </ul>
          </div>
          <div>
            <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Want to go deeper?
            </h4>
            <ul className={`space-y-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Take a free online course (Coursera's "AI for Everyone")</li>
              <li>• Experiment with AI tools for your work/hobbies</li>
              <li>• Join AI communities online</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Final motivational message */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg fade-in-content">
        <p className="font-medium">💡 Remember {learnerName}: AI is a tool to augment human intelligence, not replace it.</p>
        <p className="text-sm opacity-90 mt-1">The future belongs to people like you who understand how to work alongside AI effectively!</p>
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        @keyframes trophy-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-5deg); }
          75% { transform: scale(1.1) rotate(5deg); }
        }

        @keyframes celebration-burst {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall linear infinite;
        }

        .confetti-1 { background: #ff6b6b; }
        .confetti-2 { background: #4ecdc4; }
        .confetti-3 { background: #45b7d1; }
        .confetti-4 { background: #f9ca24; }
        .confetti-5 { background: #6c5ce7; }
        .confetti-6 { background: #fd79a8; }

        .floating-star {
          position: absolute;
          font-size: 20px;
          animation: float-up ease-out infinite;
        }

        .celebration-burst {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .celebration-burst.celebration {
          animation: celebration-burst 2s ease-out;
        }

        .burst-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%);
        }

        .trophy-container.celebration .trophy-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .trophy-container.celebration .trophy-icon {
          animation: trophy-bounce 1s ease-in-out infinite;
        }

        .celebration-text.initial {
          opacity: 0;
          transform: translateY(20px);
        }

        .celebration-text.celebration {
          opacity: 1;
          transform: translateY(0);
          transition: all 1s ease-out;
        }

        .celebration-title {
          animation: celebration-text 2s ease-out;
        }

        .achievement-badge.initial {
          opacity: 0;
          transform: scale(0);
        }

        .achievement-badge.celebration {
          opacity: 1;
          transform: scale(1);
          transition: all 1s ease-out 1s;
        }

        .fade-in-content {
          animation: fade-in-up 1s ease-out 2s both;
        }

        .certificate-container {
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          padding: 1rem;
        }

        @keyframes celebration-text {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          .certificate-container {
            padding: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .certificate-container {
            padding: 3rem;
          }
        }
        
        @media (max-width: 640px) {
          .certificate-container {
            padding: 0.75rem;
            margin: 1rem;
          }
          
          .certificate-container h2 {
            font-size: 1.25rem !important;
          }
          
          .certificate-container h3 {
            font-size: 1.125rem !important;
          }
          
          .certificate-container h4 {
            font-size: 1rem !important;
          }

          .certificate-container p {
            font-size: 0.75rem !important;
          }

          .certificate-container .border-double {
            border-width: 2px;
            padding: 0.5rem;
          }
        }

        @media print {
          .certificate-container {
            background: white !important;
            box-shadow: none !important;
            border: 2px solid #2563eb !important;
          }
          
          .border-double {
            border-color: #2563eb !important;
          }
          
          h1, h2, h3, h4 {
            color: #1e40af !important;
          }
          
          p {
            color: #374151 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Summary;