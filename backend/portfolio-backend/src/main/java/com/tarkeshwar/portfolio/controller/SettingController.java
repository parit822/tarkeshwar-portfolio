package com.tarkeshwar.portfolio.controller;

import com.tarkeshwar.portfolio.service.SettingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class SettingController {

    private final SettingService settingService;

    @GetMapping("/resume")
    public Map<String, String> getResumeUrl() {
        return Map.of("resumeUrl", settingService.getResumeUrl());
    }

    @PutMapping("/resume")
    public Map<String, String> updateResumeUrl(
            @RequestBody Map<String, String> request
    ) {
        settingService.updateResumeUrl(request.get("resumeUrl"));

        return Map.of("message", "Resume URL updated successfully");
    }

    // Upload resume PDF from admin panel
    @PostMapping("/resume/upload")
    public Map<String, String> uploadResume(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String uploadDir = System.getProperty("user.dir")
                + File.separator + "uploads"
                + File.separator + "resume"
                + File.separator;

        File dir = new File(uploadDir);

        if (!dir.exists()) {
            dir.mkdirs();
        }

        String fileName = "resume.pdf";
        String filePath = uploadDir + fileName;

        file.transferTo(new File(filePath));

        String resumeUrl = "http://localhost:8080/uploads/resume/" + fileName;

        settingService.updateResumeUrl(resumeUrl);

        return Map.of(
                "message", "Resume uploaded successfully",
                "resumeUrl", resumeUrl
        );
    }
}