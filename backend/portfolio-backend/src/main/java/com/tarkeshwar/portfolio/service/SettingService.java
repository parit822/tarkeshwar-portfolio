package com.tarkeshwar.portfolio.service;

import com.tarkeshwar.portfolio.entity.Setting;
import com.tarkeshwar.portfolio.repository.SettingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SettingService {

    private final SettingRepository settingRepository;

    public String getResumeUrl() {

        return settingRepository
                .findBySettingKey("resume_url")
                .map(Setting::getSettingValue)
                .orElse("");
    }

    public void updateResumeUrl(String url) {

        Setting setting = settingRepository
                .findBySettingKey("resume_url")
                .orElse(
                        Setting.builder()
                                .settingKey("resume_url")
                                .build()
                );

        setting.setSettingValue(url);

        settingRepository.save(setting);
    }
}