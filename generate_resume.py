import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Palette colors
    PRIMARY = colors.HexColor('#160029')
    ACCENT = colors.HexColor('#D44D5C')
    DARK_TEXT = colors.HexColor('#222222')
    MUTED_TEXT = colors.HexColor('#555555')
    LINE_COLOR = colors.HexColor('#E3B5A4')

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=PRIMARY,
        alignment=0
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=ACCENT,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=MUTED_TEXT,
        alignment=0
    )

    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=PRIMARY,
        spaceBefore=8,
        spaceAfter=3
    )

    subheading_style = ParagraphStyle(
        'SubheadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=DARK_TEXT
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=DARK_TEXT,
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=DARK_TEXT,
        leftIndent=10,
        firstLineIndent=-6,
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("REHAN MULANI", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("ASPIRING SOFTWARE DEVELOPER | AI / MACHINE LEARNING", title_style))
    story.append(Spacer(1, 4))
    
    contact_text = "Navi Mumbai, India &nbsp;|&nbsp; rehanmulani225@gmail.com &nbsp;|&nbsp; github.com/Rehan225 &nbsp;|&nbsp; linkedin.com/in/rehan-mulani-502a79333/"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=LINE_COLOR, spaceBefore=0, spaceAfter=8))

    # Education Section
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=PRIMARY, spaceBefore=1, spaceAfter=6))
    
    edu_data = [
        [
            Paragraph("<b>BTech in Computer Science Engineering (CSE)</b>", subheading_style),
            Paragraph("<font color='#555555'>Pursuing</font>", ParagraphStyle('RightAlign', parent=subheading_style, alignment=2))
        ],
        [
            Paragraph("ITM Skills University", body_style),
            Paragraph("", body_style)
        ],
        [
            Paragraph("<b>Diploma in Computer Science Engineering</b>", subheading_style),
            Paragraph("<font color='#555555'>Completed</font>", ParagraphStyle('RightAlign', parent=subheading_style, alignment=2))
        ],
        [
            Paragraph("Pillai College", body_style),
            Paragraph("", body_style)
        ]
    ]
    t_edu = Table(edu_data, colWidths=[400, 132])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 6))

    # Work Experience Section
    story.append(Paragraph("WORK EXPERIENCE", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=PRIMARY, spaceBefore=1, spaceAfter=6))

    exp_data_1 = [
        [
            Paragraph("<b>Machine Learning Intern</b> &nbsp;|&nbsp; Hyperstellar Technology", subheading_style),
            Paragraph("<font color='#555555'>Internship</font>", ParagraphStyle('RightAlign', parent=subheading_style, alignment=2))
        ]
    ]
    t_exp_1 = Table(exp_data_1, colWidths=[400, 132])
    t_exp_1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp_1)
    story.append(Paragraph("• Implemented Machine Learning algorithms, dataset preparation, and data preprocessing pipelines.", bullet_style))
    story.append(Paragraph("• Conducted exploratory data analysis (EDA) to build and evaluate predictive models.", bullet_style))
    story.append(Spacer(1, 5))

    exp_data_2 = [
        [
            Paragraph("<b>Web Scraping & Data Intern</b> &nbsp;|&nbsp; Dezignolics Technologies", subheading_style),
            Paragraph("<font color='#555555'>Internship</font>", ParagraphStyle('RightAlign', parent=subheading_style, alignment=2))
        ]
    ]
    t_exp_2 = Table(exp_data_2, colWidths=[400, 132])
    t_exp_2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp_2)
    story.append(Paragraph("• Executed automated web scraping using Python and Pandas to extract and clean web data.", bullet_style))
    story.append(Paragraph("• Structured unstructured datasets and automated database ingestion pipelines into SQL databases.", bullet_style))
    story.append(Spacer(1, 6))

    # Technical Projects
    story.append(Paragraph("TECHNICAL PROJECTS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=PRIMARY, spaceBefore=1, spaceAfter=6))

    story.append(Paragraph("<b>Project Chronos</b> &nbsp;|&nbsp; <i>AWS, Docker, Kubernetes, Jenkins, Terraform, Prometheus, Grafana</i>", subheading_style))
    story.append(Paragraph("• Architected a cloud-native DevOps platform for financial market risk intelligence.", bullet_style))
    story.append(Paragraph("• Automated infrastructure deployment and container orchestration for high availability and monitoring.", bullet_style))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>MeetAssist: AI Meeting Summarizer</b> &nbsp;|&nbsp; <i>React, Python, Whisper AI, LLM APIs</i>", subheading_style))
    story.append(Paragraph("• Built an AI-powered platform converting meeting recordings into transcripts, summaries, and action items.", bullet_style))
    story.append(Paragraph("• Automated meeting documentation workflows to improve knowledge retrieval and save manual effort.", bullet_style))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>Personal Developer Portfolio</b> &nbsp;|&nbsp; <i>React, Vite, JavaScript, CSS3</i>", subheading_style))
    story.append(Paragraph("• Developed a modern responsive portfolio featuring modular architecture, custom styling, and clean UI.", bullet_style))
    story.append(Spacer(1, 6))

    # Technical Skills Section
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=PRIMARY, spaceBefore=1, spaceAfter=6))

    skills_data = [
        [
            Paragraph("<b>Languages:</b>", body_style),
            Paragraph("Python, JavaScript (ES6+), Java, C / C++, SQL", body_style)
        ],
        [
            Paragraph("<b>Machine Learning:</b>", body_style),
            Paragraph("Machine Learning Basics, GenAI Fundamentals, NumPy, Pandas, Scikit-Learn", body_style)
        ],
        [
            Paragraph("<b>Tools & Tech:</b>", body_style),
            Paragraph("Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Docker, Kubernetes, npm", body_style)
        ],
        [
            Paragraph("<b>Databases:</b>", body_style),
            Paragraph("SQL, PostgreSQL, JSON / REST APIs", body_style)
        ]
    ]
    t_skills = Table(skills_data, colWidths=[110, 422])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_skills)

    doc.build(story)
    print("PDF generated successfully at:", filename)

if __name__ == '__main__':
    target = '/Users/rehan/Desktop/portfolio/public/resume.pdf'
    build_pdf(target)
